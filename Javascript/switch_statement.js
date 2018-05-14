var input = parseInt(prompt("Type a course number"));

switch(input) {
  case 1:
    console.log("WebClient computing");
    break;
  case 2:
    console.log("WebServer computing");
    break;
  case 3:
    console.log("Data Structure");
    break;
  default:
    console.log("No course");
    break;
}
