$(document).ready(function(){
    
   $('#exemplo, #exemplo2').buttonCaptcha({
       captchaHeader : 'Você é um robo?',
       captchaTip : 'Arrasta as letras da esquerda para a direita para formar a palavra "%code_word%". Obrigado!',
       codeWord : 'Gabriel', // troca a palavra para desbloqueio.
       //codeWord : 5, // se for numero deixa a palavra dinamica (code word)
       captchaUnlocked : 'Desbloquado!'
   });

});
