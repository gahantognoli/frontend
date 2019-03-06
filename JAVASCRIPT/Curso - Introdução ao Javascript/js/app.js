//incrementa
//Obtem todos os elementos com a classe btn-incrementa
var botoesIncrementa = document.getElementsByClassName("btn-incrementa"); 

//Navegando na lista de botões.
for(let botao of botoesIncrementa){

    botao.addEventListener("click", incrementa); // Só é necessário (), quando vamos passar parâmetros.
    
    //Função para incrementar.
    function incrementa() {
        //Obtém o item.
        //closest procura nos elementos SUPERIORES do botao a classe "item".
        var item = botao.closest(".item");
    
        //Devolve o preço do item.
        var preco = getPrecoItem(item);
    
        AddToTotal(preco);
    
        //Pega o input do item clicado.
        var inputQuantidadeItem = item.querySelector(".quantidade");
    
        // o ++ realiza a conversão em numero implicitamente e adiciona um ao valor do elemento.
        inputQuantidadeItem.value++;
    }
}

//decrementa
//Obtem todos os elementos com a classe btn-decrementa
var botoesDecrementa = document.getElementsByClassName("btn-decrementa");

//Percorrendo/navegando na lista de botões com a classe btn-decrementa.
for(let botao of botoesDecrementa){

    botao.addEventListener("click", decrementa);
    
    //Função para decrementar.
    function decrementa() {
        //Obtém o item.
        //closest procura nos elementos SUPERIORES do botaoIncrementa a classe "item".
        var item = botao.closest(".item");
        
        //Pega o input do item clicado.
        var inputQuantidadeItem = item.querySelector(".quantidade");
        
        if(inputQuantidadeItem.value > 0){
            
            // o -- realiza a conversão em numero implicitamente e decrementa um ao valor do elemento.
            inputQuantidadeItem.value--;
    
            //Devolve o preço do item.
            var preco = getPrecoItem(item);
            
            //Passando o valor do preço negativo, para ser SUBTRAIDO do total do pedido.
            AddToTotal(-preco);
        }
    }
}

var formPedido = document.forms.pedido;

//parametro event = quem passa é o próprio javascript.
formPedido.addEventListener("submit", function(event){

    var contador = 0;

    //Seletor mais claro, somente os inputs com a classe quantidade.
    var inputs = formPedido.querySelectorAll("input.quantidade");
    
    //Percorrendo os inpus.
    for(let input of inputs)
    {
        if(input.value > 0)
        {
            contador++;
        }
    }

    //Verificando se há pelo menos um item no pedido.
    if(contador == 0)
    {
        alert("Deve ter pelo menos 1 pizza no pedido");
        event.preventDefault(); //retirando o evento de submit para que a requisição não seja enviada.
    }
});

// **** Funções auxiliares ****

// Função que obtem o valor do elemento que possui a classe "preco-item" e devolve o valor convertido em numérico.
function getPrecoItem(item) { //Não é preciso colocar "var" no parametro.
    var precoItem = item.querySelector(".preco-item");
    return Number(precoItem.textContent);
}

//Função que calcula o valor total do pedido.
function AddToTotal(valor) {
    //Pega o elemento com o responsável por exibir o total.
    var total = document.querySelector("#total");
    /*Atribui ao texto do elemento com o total o valor do preço + o valor já contido nele, totalizando o valor total 
    do pedido*/
    total.textContent = valor + Number(total.textContent);
}
