$('#target').prev().attr('style', 'color:red');
$('#target').prevAll().attr('style', 'color:red');
$('#target').prevUntil('.stop').attr('style', 'color:blue');

$('#target').next().attr('style', 'color:green');
$('#target').nextAll().attr('style', 'color:green');
$('#target').nextUntil('.stop').attr('style', 'color:red');

