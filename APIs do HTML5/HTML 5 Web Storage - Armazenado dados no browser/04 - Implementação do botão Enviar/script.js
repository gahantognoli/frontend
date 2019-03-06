// implementando exemplo de local storage.
window.onload = function() {
    try {
        if(window.localStorage){ //verificando se há suporte ou está habilidade o storage do navegador.
            if(window.localStorage.getItem("mensagem") !== null){
                document.getElementById("txtMensagem").value = window.localStorage.getItem("mensagem");
            }
            if(window.localStorage.getItem("assunto") !== null){
                document.getElementById("txtAssunto").value = window.localStorage.getItem("assunto");
            }
        }
        if(window.sessionStorage){ //verificando se há suporte ou está habilidade o storage do navegador.
            if(window.sessionStorage.getItem("mensagem") !== null){
                document.getElementById("txtMensagem").value = window.sessionStorage.getItem("mensagem");
            }
            if(window.sessionStorage.getItem("assunto") !== null){
                document.getElementById("txtAssunto").value = window.sessionStorage.getItem("assunto");
            }
        }
    } catch(e) {
        document.getElementById("btnSalvar").style.display = "none"; //desabilita botão caso não seja suportado
    }
};

document.getElementById('btnSalvar').addEventListener('click', salvar);

// Local Storage
function salvar() {
    var mensagem = document.getElementById('txtMensagem').value;
    var assunto = document.getElementById('txtAssunto').value;

    if(assunto.length == 0){
        alert('Informe o assunto!');
    }
    else if(mensagem.length == 0){
        alert('Informe a Mensagem!')
    }
    else {
        window.localStorage.setItem("mensagem", mensagem);
        window.localStorage.setItem("assunto", assunto);
        alert('Rascunho salvo com sucesso!');
    }
}

document.getElementById('btnEnviar').addEventListener('click', enviarMensagem);

function enviarMensagem() {
    var mensagem = document.getElementById('txtMensagem').value;
    var assunto = document.getElementById('txtAssunto').value;

    if(assunto.length == 0){
        alert('Informe o assunto!');
    }
    else if(mensagem.length == 0){
        alert('Informe a Mensagem!')
    }
    else {
        window.location.href = "mailto:gabriel_antognoli@hotmail.com?Subject"+assunto+"&Body?"+mensagem+"\n\n";
        var mensagem = document.getElementById('txtMensagem').value = "";
        var assunto = document.getElementById('txtAssunto').value = "";
        window.localStorage.clear(); //limpa os dados do local storage.
    }
}

document.getElementById('btnSalvarSessao').addEventListener('click', salvarSessao);

//Session Storage
function salvarSessao() {
    var mensagem = document.getElementById('txtMensagem').value;
    var assunto = document.getElementById('txtAssunto').value;

    if(assunto.length == 0){
        alert('Informe o assunto!');
    }
    else if(mensagem.length == 0){
        alert('Informe a Mensagem!')
    }
    else{
        window.sessionStorage.setItem("assunto", assunto);
        window.sessionStorage.setItem("mensagem", mensagem);
        alert("Registro salvo com sucesso!");
    }
}



