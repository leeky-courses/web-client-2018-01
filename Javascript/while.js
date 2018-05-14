var arr1 = [10, 5, 9, -3, 4, 5];
var index = 0;
while (arr1[index] > 0) {
  console.log("Positive value: " + arr1[index++])
}
while (true) {
  var sum_input = parseInt(prompt("2 + 5 = "));
  if (sum_input != 7) {
    console.log("a wrong answer. try again");
    continue;
  }
  console.log("pass add question");
  var mul_input = parseInt(prompt("2 * 5 = "));
  if (mul_input == 10) {
    console.log("pass multiplication question");
    break;
  }
  console.log("failed multiplication question.");
}
