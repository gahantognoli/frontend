$('li').css({backgroundColor: 'lightgreen'});
$('li').css({transition: 'all 0.5s ease', fontSize: '20px'});

/*$('li').addClass('red-font');*/

$('li').toggleClass('red-font');

console.log($('li').hasClass('red-font'));

/*$('li').first().animate({
    'font-size' : '30px'
}, 200)
.delay(200).animate({
    'font-size' : '20px'
}, 200);*/

//O comando stop() do jQuery serve para parar animações.
// Por exemplo caso o usuário clique varias vezes em um botão e voce tenha uma animação nesse botão,
// essa animação vai ficar executando pelo número de vezes que o usuário clicou no seu botão.
//Com o stop() você evita esse tipo de comportamento, pois é parando a animação para começar outra,
//com isso somente a ultima aimação será executada.

for(var i = 0; i < 9; i++){
    $('li').first().stop().slideToggle(1000);
}