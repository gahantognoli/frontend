$(document).ready(function() {
  $("#nome")
  /*.on("keyup", function() {
    $('#paragrafo1').text($(this).val());
  })
  .on("keydown", function() {
    $('#paragrafo1').text($(this).val());
  })*/
  .on("keypress", function() {
    $('#paragrafo1').text($(this).val());
  })
  .on('blur', function(){
    alert('Perdeu o foco do campo!');
  });
});
