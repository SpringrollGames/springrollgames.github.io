var sample_variable = "VARIABLES";

var functions = {

sample_function: {
  description: `<p>description can have <a href="#test_function">links</a></p>`,
  syntax: 'syntax()',
  args: [
    'argument', 'description',
    'argument', 'description'
  ],
  returns: 'return value',
  example: {
    code:
`the code can't have indentation to the normal level
because it needs to use pre
    yeet`,
    description: `
      <p>Use backtick to multiline string (template technically)</p>
      <p>You can include ${sample_variable} in it hehe</p>`
  }
}, // remember to put a comma between functions

test_function: {
  description:
    `<p>All instances have a unique identifier (<a href="#id">id</a>) which can be used to modify and manipulate them while a game is running, but you may not always know what the id for a specific instance is and so this function can help as you can use it to iterate through all of them to find what you need. You specify the object that you want to find the instance of and a number, and if there is an instance at that position in the instance list then the function returns the id of that instance, and if not it returns the special keyword <strong>noone</strong>. You can also use the keyword <strong>all</strong> to iterate through all the instances in a room, as well as a parent object to iterate through all the instances that are part of that parent / child hierarchy and you can even specify an instance itself (if you have its id) as a check to see if it actually exists in the current room. Please note that as instances are sorted in an <i>arbitrary</i> manner, there is no specific order to how the instances are checked by this function, and any instance can be in any position.</p>
    <p>The maximum value for "n" in this function would be</p>
    <ul>
      <li>For the keyword <strong>all</strong>: <a href="#instance_count">instance_count - 1</a></li>
      <li>For the object index: <a href="#instance_number">instance_number(OBJ) - 1</a></li>
    </ul>`,
  syntax: 'instance_find(obj, n);',
  args: [
    'obj', 'The object to find the nth instance of',
    'n', 'The number of the instance to find'
  ],
  returns: 'Real (either an instance ID value or the keyword noone)',
  example: {
    code:
`var i;
for (i = 0; i < instance_number(obj_Enemy); i += 1)
    {
     enemy[i] = instance_find(obj_Enemy,i);
    }`,
    description: `<p>The above code will use a for loop to iterate through all the instances of "obj_Enemy" and store their id in the array "enemy[]".</p>`
  }
}

// end functions

}