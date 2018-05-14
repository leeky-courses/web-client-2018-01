var arr1 = [1,3,5,7,9];
var index = 0;

while (arr1[index] != undefined) {
  console.log("arr1 with while loop: " + arr1[index]);
  index++;
}

for(var index = 0; arr1[index] != undefined; index++) {
  console.log("arr1 with for loop: " + arr1[index]);
}

var arr2 = [1,2,3,4,5,6,7,8,9];
for(var index = 0; ; index++) {
  if (arr2[index] == undefined) {
    break;
  }

  if (arr2[index] % 2 != 0) {
    continue;
  } else {
    console.log("print even number: " + arr2[index])
  }
}

