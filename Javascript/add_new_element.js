var p_elem = document.createElement("p");
var content = document.createTextNode("new strings");
p_elem.appendChild(content);

var target = document.getElementById("first-p");

function add() {
  target.appendChild(p_elem);
}

function rm() {
  target.removeChild(p_elem)
}

// after covering defer
var add_id = setInterval(add, 3000);
var rm_id = setInterval(rm, 7000);

