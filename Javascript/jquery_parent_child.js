var start = $('#container');
start.children('#second-child').text("this is my second child");
start.find('.second-gc').text('only the second grand child');

var fgc = $('#first-gc');
fgc.parent().text("You are my parent");

