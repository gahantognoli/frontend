

//Chamando a Promise = contrala a requisição, caso tenha dado certo ou tenha dado erro, os tratando.
//Permite validar as requisições assincronas com o THEN(resolve = SUCESSO) e CATCH (reject = ERRO).
minhaPromise()
    .then(function(response){ //o resolve(quando a requisição da certo, invoca o THEN, 
                            //ou seja quando a requisição der certo ele irá entrar nesse bloco) 
        console.log(response);
    })
    .catch(function(error){ // o reject invoca o catch, ou seja quando der erro na requisição ira entrar nesse bloco
        console.warn(error);
});