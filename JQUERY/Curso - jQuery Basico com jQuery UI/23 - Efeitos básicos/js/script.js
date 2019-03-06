$(document).ready(function() {

  $('#sanf1').on('click', function(){
    $('#parafrago1').show('fast'); //slow
  });

  $('#sanf2').on('click', function(){
    $('#parafrago1').hide('normal'); //slow
  });

  $('#sanf3').on('click', function(){
    $('#paragrafo2').toggle(2000, function(){
      alert('Toggle terminou'); //função de callback.
      $('#sanf2').trigger('click');
    });
  });
  
});
