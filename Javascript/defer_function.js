function setTimeoutFunc() {
  console.log("calling setTimeout function");
}

setTimeout(setTimeoutFunc, 2000);

var cid = setInterval(function() {console.log("calling setInterval")}, 3000);

setTimeout(function() {clearInterval(cid)}, 10000);
