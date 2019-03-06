//A API do DOM é lenta por isso devemos evitar o constante uso dela o melhor possível.
//Uma maneira performática de selecionar o elemento apenas uma vez e alterar sua propriedades passando de 
//uma única vez um onjeto com suas propriedades e valores.
$('div')
	.css({
		'background' : 'black',
		'color' : 'white'
	});
