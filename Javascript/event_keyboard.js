function key_pressed(e) {
  document.getElementById("key-demo").innerHTML = e.keyCode + " is pressed -  " + String.fromCharCode(e.keyCode);
}
