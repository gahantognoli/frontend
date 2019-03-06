$(document).ready(function(){
    
    $('#drag').draggable({
        cursor : 'pointer',
        opacity : '0.8',
        //axis : 'x' ou y || define eixo de movimentação.
        scroll : true, // cria barra de rolagem caso o elemento não caiba.
        containment : body
    });

    $('#drop').droppable({
        drop : function(event, ui){
            $(this).addClass('drop_hover').find('p').html('Movido!');
        },

        hoverClass : 'drop_hover'
    });

});