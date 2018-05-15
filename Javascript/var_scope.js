var global_var = 123;
console.log(global_var);
function test1() {
  var local_var = 234;
  console.log(global_var + " " + local_var);
  global_var = 456;
}

test1();
console.log(global_var);

function test2() {
    global_val_function = 789;
}

test2();
console.log(global_val_function);

console.log(local_var);

