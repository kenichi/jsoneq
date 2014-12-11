var a, b, test;

$(document).ready(function() {

  test = function() {
    a = JSON.parse($('#a').val()),
    b = JSON.parse($('#b').val());
    return _.isEqual(a, b);
  }

  $('#test').on('click', function(e) {
    if (test()) {
      $('#equal').show();
      $('#notequal').hide();
    } else {
      $('#equal').hide();
      $('#notequal').show();
    }
  });

  $('.textareas div textarea').on('input propertychange', function(e) {
    $('.results div').hide();
  });

});
