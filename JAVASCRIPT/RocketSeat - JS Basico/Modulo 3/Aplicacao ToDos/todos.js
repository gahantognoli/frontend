var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//Armazenado to dos em um array que está salvo em JSON no localStorage.
//O método getItem do localStorage retorna o valor contido na chave "list_todo".
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

//Função que irá renderizar o array acima na tela.
function renderTodos(){
    //Limpar o conteudo da lista, antes de adicionar.
    listElement.innerHTML = "";//innerHTML = acessa o conteudo dentro da tag.

    //Percorrendo o array de todos.
    for(todo of todos){
        //Criando o listItem
        var todoElement = document.createElement("li");
        //Criando o texto do elemento.
        var todoText = document.createTextNode(todo);

        //Criando link para excluir.
        var linkElement = document.createElement("a");
        //Criando atributo href para o link criado.
        linkElement.setAttribute("href", "#");
        //Setando a posicao do atributo.
        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteToDo(" + pos + ")");
        //Criando texto para o link.
        var linkText = document.createTextNode("Excluir");
        //Adicionado texto ao link.
        linkElement.appendChild(linkText);
        //Adicionando o texto ao listItem
        todoElement.appendChild(todoText);
        //Adicionando o link ao listItem
        todoElement.appendChild(linkElement);

        //Adicionando o listItem a lista.
        listElement.appendChild(todoElement);
    }
}

renderTodos();

//Função que adiciona os novos to dos.
function addToDo(){
    var todoText = inputElement.value;
    //Adicionando o todoText(valor do input) ao final do array "todos".
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

//Passando a referencia da função para o evento "onclick" do botão.
buttonElement.onclick = addToDo;

//Função que remove o listItem de acordo com sua posicao.
function deleteToDo(pos){
    todos.splice(pos, 1); //splice = remove um item do array a partir do primeiro parametro, seguido do seu elemento.
    renderTodos();
    saveToStorage();
}

//O HTML permite que os dados sejam salvos no lado client, permanecendo seu valores salvos mesmo que o usuário
//atualize a página ou feche o navegador, ulizando o localStorage.
function saveToStorage(){
    //Setando uma chave com o nome "list_todos" e o segundo parametro é o seu valor, caso o localStorage não consegue
    //salvar os dados em formato de array(apenas chave/string) então realizamos a conversão do nosso array em uma string
    // no formato JSON.
    localStorage.setItem("list_todos", JSON.stringify(todos));
}