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
    } catch(e) {
        document.getElementById("btnSalvar").style.display = "none"; //desabilita botão caso não seja suportado
    }
}