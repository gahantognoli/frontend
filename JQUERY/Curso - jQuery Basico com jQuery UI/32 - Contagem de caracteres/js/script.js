$(document).ready(function() {
  
  $('textarea').bind('input keyup paste', function(){
    var cont = $(this).val().length;

    var limite = 50;
    var caracteresDisponivel = limite - cont;

    //Verificando o limite de caracteres!
    if(caracteresDisponivel <= 0){
      $('h5').text('Limite máximo atingido!');
      $(this).val($(this).val().substr(0, limite));
      caracteresDisponivel = 0;
    }else{
      $('h5').text('');
    }

    $('#cont').text(cont);

  });

});
