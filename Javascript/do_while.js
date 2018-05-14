var answer = parseInt(prompt("5 * 7 = "));
while(answer != 35) {
  answer = parseInt(prompt("5 * 7 = "));
}
console.log("You got a correct answer");

do {
  answer = parseInt(prompt("5 * 7 = "));
} while (answer != 35)
console.log("You got a correct answer with do-while");
