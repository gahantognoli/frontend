$(document).ready(function(){
    // datepicker = width completa para calendario do jQuery UI.
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
        showAnim : 'fold',
        showWeek : true,
        weekHeader : 'Sem',
        maxDate : '1w', //defini a data máxima, no exemplo 1 semana.
        minDate : '1d',
        //defaultDate : +7 //defini data atual + 7 dias como padrão.
        //firstDay : 0 // indica qual será o primeira dia da semana.
        appentText : ' Padrão dd/mm/yy', //informa o padrão de data.
        changeMonth : true, //habilita a combo para seleção do mês
        changeYear : true, //habilita combo para seleção do ano
        duration : 'fast',
        showButtonPanel : true, // habilita paineis de com botões 'Today' e 'Done'.
        closeText : 'Fechar',
        currentText : 'Hoje'
    });
});