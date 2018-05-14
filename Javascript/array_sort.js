arr1 = [77, 88, 99, 100];
console.log(arr1.sort());
function ascendingNumber(a,b) {
  return a - b;
}
function descendingNumber(a,b) {
  return b - a;
}

console.log(arr1.sort(ascendingNumber));
console.log(arr1.sort(descendingNumber));

console.log(arr1.sort(function(a,b) {return a-b;}));

