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
    }
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
    }
  },
  template: `
  <pfe-collapsable :label="name">
    <h3>Description:</h3>
    <div class="sub-section" v-html="func.description"></div>
    <h3>Syntax:</h3>
    <code class="sub-section">{{ func.syntax }}</code>
    <h3>Arguments:</h3>
    <div class="argument-grid">
      <p class="argument grid-item" v-for="arg of func.args">{{ arg }}</p>
    </div>
    <h3>Returns:</h3>
    <code class="sub-section">{{ func.returns }}</code>
    <h3>Example:</h3>
    <code class="sub-section">{{ func.example.code }}</code>
    <p class="sub-section" v-html="func.example.description"></p>
  </pfe-collapsable> 
  `
});

var main = new Vue({
  el: '#main',
  data: {
    macros: macros,
    functions: functions,
    function_keys: Object.keys(functions)
  },
  beforeMount() {
    let macro_list = [];
    for (let i = 0; i < macros.length; i += 3) {
      macro_list.push(macros[i])
    }
    this.search_list = this.function_keys.concat(macro_list);
    console.log(this.search_list);
  },
  methods: {
    search() {
      term = new RegExp(document.getElementById('searches').value);
      results = this.search_list.filter(func => term.exec(func) !== null);
      console.log(results);
    }
  }
})