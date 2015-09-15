// add scripts

$(document).on('ready', function() {
  // $('.showDogsHere').hide();
  showDogs();
});

$('form').on('submit', function(e) {
  e.preventDefault();
  // $('.showDogsHere').show();
  var payload = {
    name: $('#name').val(),
    breed: $('#breed').val(),
    age: $('#age').val()
  };
  $.post('/api/dogs/', payload, function(dogs) {
    showDogs();
  });
});


function showDogs() {
  $('#all-dogs').html("");
  $.get('/api/dogs/', function(dogs) {
    for (var i = 0; i < dogs.length; i++) {
      $('#all-dogs').append('<tr><td>' +
        dogs[i].name + '</td><td>' +
        dogs[i].breed + '</td><td>' +
        dogs[i].age + '</td></tr>'
      );
    }
  });
  $('form input').val("");
}


