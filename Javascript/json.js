$(document).ready(function() {
  $('#serialize').click(function() {
    person = new Object();
    person.firstName = $('#first-name').val();
    person.lastName = $('#last-name').val();
    var jsonString = JSON.stringify(person);
    $('#raw-json').val(jsonString);
  });

  $('#deserialize').click(function() {
    var jsonString = $('#raw-json').val();
    person = JSON.parse(jsonString);
    $('#first-name').val(person["firstName"]);
    $('#last-name').val(person.lastName);
  });
});
