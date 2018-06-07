var target_elem = $('#target');
var container_elem = $('#container');
var index = container_elem.children().index(target_elem);

$('#display').text('Index is ' + index);

// get returns a DOM object (not a jquery object)
var found_element = container_elem.children().get(index);

// convert DOM object to jqeury object
var jq_elem = $(found_element);
jq_elem.attr('style', 'color:red');
