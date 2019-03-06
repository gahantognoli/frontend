$(document).ready(function() {

  /*
  //Opção 1.
  $('input[type=text]').on('keydown', function(e){
    var key = e.which; //obtem a propriedade que contém o valor da tecla no ASCII.
    var isNumeric = (key >= 48 && key <= 57);
    var isOtherKeys = ($.inArray(key, [8, 37, 38, 39, 40, 46]) != -1);

    return (isNumeric || isOtherKeys);

  });
  */

 $('input[type=text]').on('keyup', function(){
    if ($.isNumeric($(this).val())){
      return true;
    }else{
      $(this).val($(this).val().substr(0, $(this).val().length -1));
      return false;
    }
 });


});
