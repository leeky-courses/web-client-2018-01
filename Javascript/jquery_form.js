$(document).ready(function() {
  $('input').focus(function() {
    $(this).next('span').removeAttr('hidden');
  });

  $('input').blur(function() {
    $(this).next('span').attr('hidden', 'hidden');
  });
});
