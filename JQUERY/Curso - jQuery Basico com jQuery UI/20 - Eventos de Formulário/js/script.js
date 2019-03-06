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
  .on('focus', function(){
    $('#paragrafo1').text('FOCO!');
  })
  .on('blur', function(){
    $('#paragrafo1').text('PERDEU FOCO!');
  });

  $('input[type=button]').on('click', function(event){
    $('#paragrafo1').text('Clicou botão!');
    $('form').submit();
  });

  $('textarea').on('select', function(){
    $('#paragrafo1').text('Teaxtarea selecionado!');
  });

  $('#estados').on('change', function(){
    $('#paragrafo1').text($(this).val());
  });

  $('input[type=radio]').on('change', function(){
    $('#paragrafo1').text($(this).val());
  });

  $('#reset').on('click', function(){
    $('form').reset();
  })

});
