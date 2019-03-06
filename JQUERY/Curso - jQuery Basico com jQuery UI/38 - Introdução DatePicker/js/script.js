$(document).ready(function(){
    // datepicker
    $('#calendario').datepicker({
        dateFormat : 'dd/mm/yy', // define o formato da data.
        dayNames : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
        dayNamesShort : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        monthNames : ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
                      'Outubro', 'Novembro', 'Dezembro'],
        nextText : 'Próximo',
        prevText : 'Anterior',
        showOn : 'both', // ou Button || abrir tanto quando clicar no botão quanto no campo.
        buttonImage : 'calendario.png',
        buttonImageOnly : true,
        showAnim : 'fold'  
    });
});