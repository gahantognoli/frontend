$(document).ready(function() {

    var contador = $("#quantidade .contador span");

    /* Incremento do contador */

    var btn_quantidade_mais = $("#quantidade-mais");

    //element -> bind -> event -> callback function.
    btn_quantidade_mais.on("click", incrementa);

    /* Decremento do contador */

    var btn_quantidade_menos = $("#quantidade-menos");

    btn_quantidade_menos.on("click", decrementa);

    /* Funções de incremento e decremento */

    function incrementa() {
        var contagem = parseInt(contador.text());

        contador.text(contagem + 1);
    };

    function decrementa() {
        var contagem = parseInt(contador.text());

        if(contagem <= 0){
            return;
        }

        contador.text(contagem - 1);
    };

});