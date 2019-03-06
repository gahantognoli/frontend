//Exemplo 
texto = "Estudando Javascript na DevMedia! JAVAscript é uma linguagem dinâmica.";

//Expressão regular para localizar a string "Javascript".
//g = Localiza todas as ocorrências da palavra "JavaScript".
//i = Localizar independente do case;(maiúsculo ou minisculo).
resultado = texto.replace(/JavaScript/gi, "C#"); 

console.log(resultado);

