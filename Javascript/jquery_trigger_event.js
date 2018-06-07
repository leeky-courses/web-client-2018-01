$(document).ready(function() {
  $('#button-1').click(function() {
    $('#display').text("Button 1 is clicked");
    $('#clicked-ID').text($(this).attr('id'));
  });

  $('#button-2').click(function() {
    $('#button-1').click(); 
    $('#clicked-ID').text($(this).attr('id'));
  });
});
