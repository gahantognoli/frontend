//Requisições ajax são requisição ASSINCRONAS do javascript, ou seja elas buscam ou enviam informações do backend
//sem que seja precisa RECARREGAR a página.

//EXEMPLO de uma requisição ajax com javascript, consumindo a API do gitbug.

var xhr = new XMLHttpRequest(); //nessa classe esta contida todas as funcionalidades do AJAX.

//primeiro parametro = verbo http || segundo parametro = url.
xhr.open("GET", "https://api.github.com/users/gahantognoli");

//enviar a requisição, montada acima.
xhr.send(null);

//Verificando se obtivemos resposta do servidor do gitgub
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){ //teve resposta
        console.log(JSON.parse(xhr.responseText));//imprimindo os dados da resposta ao servidor no console do navegador.
    }
}
