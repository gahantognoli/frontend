/*var url = 'https://api.github.com/repositories?q=';
$(url + 'jquery').then(function(result){

    console.log(result);

});*/

$(document)
.ajaxSend(function(){
    $('button').text('Loading...');
})
.ajaxComplete(function(){
    $('button').text('Complete');
})

var url = 'https://api.github.com/search/repositories?q=';
$.ajax(url + 'jquery')
