$(document).ready(function() {

  $("#nome").on("keypress", function() {
    $('#paragrafo1').text($(this).val());
  });

});
