$(document).ready(function(){
    
    $('#data').mask('99/99/9999', {completed : function(){alert('Completou!')}}); //9 = numericos. 
    $('#cpf').mask('999.999.999-99');
    $('#fone').mask('(999) 9999-9999?x99999'); // ? define que o valor será opcional.

});
