$(document).ready(function() {

  //$(':text').bind('keypress blur mouseover', teste);
  $('form').delegate(':text', 'keypress blur', teste); //delega a um elemento uma regra ...

  $("#reset").on("click", function() {
    $('#paragrafo1').text($(this).val());
  });

  $("#Add").on("click", function() {
    $('form').append('<br><input type="text" />');
    $('#nome').val('abcd');
    $('#nome').trigger('blur');
  });

  function teste() {
    $('#paragrafo1').text($(this).val());
  }

});
