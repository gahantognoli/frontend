/*var listItem = '<li>4</li>';
var preListItem = '<li>0</li>';

$('ul').append(listItem);
$('ul').prepend(preListItem);*/

/*$('li').first().after('<li>1.5</li>');
$('li').last().before('<li>2.5</li>');*/

/*$('ul').wrap('<p></p>').css({
    'border' : '1px solid black'
});

$('ul').unwrap('p');

/*$('li').wrap('<p></p>').css({
    'border' : '1px solid black'
});*/

/*$('li').wrapAll('<p></p>').css({
    'border' : '1px solid black'
});*/

/*$('li').wrapInner('<p></p>').css({
    'border' : '1px solid black'
});*/

/*$('ul').remove();

$('ul').empty();*/

/*var element = $('li').detach();

$('ul').append(element);*/

$('li').first().replaceWith('<li>my new item</li>');

var myCopyElement = $('li').first().clone();

$('ul').append(myCopyElement);