$(document).ready(function() {
  $("#animate").click(function(){
    $("#animate-demo").animate({backgroundColor: "#aa0000", left:"170px",opacity:"0.5"}, 2000);
    $("#animate-demo").animate({fontSize:"5em"}, 1000);
  });
});


