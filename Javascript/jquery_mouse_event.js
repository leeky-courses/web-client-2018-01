$('#target-id').click(function (event) {
  output = "User clicked on " + event.pageX + "/" + event.pageY;
  $('#display').text(output);
})

$('.target-class').click(function() {
  output = "XXXXXXXXXXXXXXXXX  is clicked";
  $('#display').text(output);
})

