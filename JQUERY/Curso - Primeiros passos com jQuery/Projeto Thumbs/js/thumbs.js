$(document).ready(function(){

    var btn_thumbs = $("#thumbs");
    var contador = $("#thumbs .contador span");

    btn_thumbs.on("click", onClick);

    function onClick() {

        if(btn_thumbs.hasClass("disabled")){
            return;
        }

        var contagem = parseInt(contador.text());
        contador.text(contagem + 1);

        btn_thumbs.addClass("disabled");

        //Criação de um elemento com jQuery!
        var p = $("<p>", {
            text : "Obrigado pelo seu feedback!"
        });

        btn_thumbs.after(p);
    }

});