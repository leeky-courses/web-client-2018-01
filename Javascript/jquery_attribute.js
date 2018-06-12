$('#target').attr('style', 'color:red; font-size:3em;');
var attr_style = $('#target').attr('style');
var css_color = $('#target').css('color');
$('#display').text("style attribute: " + attr_style + " css color: " + css_color);
$('#target').css('color', 'blue');
$('#target').removeAttr('style');
