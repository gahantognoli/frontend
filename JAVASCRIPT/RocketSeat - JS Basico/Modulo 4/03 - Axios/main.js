//Chamando a Promise = contrala a requisição, caso tenha dado certo ou tenha dado erro, os tratando.
//Permite validar as requisições assincronas com o THEN(resolve = SUCESSO) e CATCH (reject = ERRO).
axios.get("https://api.github.com/users/gahantognoli")
    .then(function(response){ // por padrão o axios retorna um json.
        console.log(response.data.name); //pegando a propriedade "name" da api.
    })
    .catch(function(error){ // o reject invoca o catch, ou seja quando der erro na requisição ira entrar nesse bloco
        console.warn(error);
 }); 