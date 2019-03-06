$(document).ready(function(){
    $('#enviar').on('click', cliqueBotao);  
});

function exibeNota(data){
    //Tratando requsição ajax com array(mais de um registro).
    if($.isArray(data)){
        $("#retorno").empty();
        $.each(data, function(index, value) {
            $("#retorno").prepend("ID: " + value.Id + "<br>Titulo: " + value.Title + "<br>Conteudo: " + value.Body + "<br><br>")
        });
    }else{
        $('#retorno').html("ID: " + data.Id + "<br>Titulo: " + data.Title + "<br>Conteúdo: " + data.Body + "<br><br>");
    }
}

function exibeErrorNota(){
    $("#retorno").html("Ops, algo de errado aconteceu.");
}

function aguardarNota(){
    $("#loading").html("<img style='width: 15px; margin-left: 10px;' src='http://www.devmedia.com.br/cursos/img/loading.gif' alt='loading' />")
}

function ocultaLoading() {
    $("#loading").empty(); //retira todo o conteudo dentro do span #loading
    // 10 < 5 ? 'sim' : 'não' ternário = operação de verificação simples.  
}

function cliqueBotao(event){
    event.preventDefault();
    var id = $('#id_nota').val();

    //Requisição AJAX
    $.ajax({
        type : 'GET', //verbo http
        dataType : 'json', //tipo de dados retornados ou que serão passados.
        url : 'http://devmedianotesapi.azurewebsites.net/api/notes/'+id, //url que será requisitada
        //Funcões de verificação.
        success : exibeNota, // status da requisição 200 = deu certo
        beforeSend : aguardarNota, // meio entre enviado e completo. = Antes de enviar a requisição
        complete : ocultaLoading, // Quando a requisição é finalizada
        error : exibeErrorNota //Quando é gerado erro na requisição.
    });

};