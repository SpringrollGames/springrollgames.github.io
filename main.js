Vue.component('pfe-collapsable', {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
  },
  template: `
  <section>
    <a href="#">
      <h3 @click="toggle">{{ label }}</h3>
    </a>
    <div :class="{ hidden:closed }">
      <slot></slot>
    </div>
  </section>
  `,
  data() {
    return {
      closed: !this.open
    }
  },
  methods: {
    toggle() {
      this.closed = !this.closed;
    }
  }
});

Vue.component('pfe-function', {
  props: {
    name: {
      type: String,
      required: true
    },
    func: {
      type: Object,
      required: true
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  template: `
  <div>
    <h2>{{ name }}</h2>
    <h3>Description:</h3>
    <div class="sub-section" v-html="func.description"></div>
    <h3>Syntax:</h3>
    <code class="sub-section">{{ func.syntax }}</code>
    <h3>Arguments:</h3>
    <div class="argument grid">
      <p class="argument grid-item" v-for="arg of func.args">{{ arg }}</p>
    </div>
    <h3>Returns:</h3>
    <code class="sub-section">{{ func.returns }}</code>
    <h3>Example:</h3>
    <code class="sub-section">{{ func.example.code }}</code>
    <p class="sub-section" v-html="func.example.description"></p>
  </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    macros: macros,
    macro_list: [],
    functions: functions,
    function_keys: Object.keys(functions).sort(),
    results: [],
    page: null
  },
  beforeMount() {
    // create list of possible search items
    for (let i = 0; i < macros.length; i += 3) {
      this.macro_list.push(macros[i])
    }
    this.search_list = this.function_keys.concat(this.macro_list);
    this.search_list.push('macros');
    // read href to show correct page
    this.load_page();
  },
  methods: {
    search() {
      term = new RegExp(document.getElementById('searches').value);
      this.results = this.search_list.filter(func => term.exec(func) !== null);
    },
    clear() {
      term = document.getElementById('searches').value;
      if (term == "") {
        this.results = [];
      }
    },
    end_search(result) {
      this.results = [];
      window.location.hash = '#' + result;
    },
    load_page() {
      // reads href to show correct page
      page = window.location.hash.slice(1);
      // macros are searchable, but all on one page
      if (this.macro_list.indexOf(page) != -1) {
        this.page = 'macros';
      } else {
        this.page = page;
      }
    }
  },
  computed: {
    page_is_function() {
      return this.function_keys.indexOf(this.page) != -1;
    }
  }
});

// page load happens on hash change
window.onhashchange = app.load_page;