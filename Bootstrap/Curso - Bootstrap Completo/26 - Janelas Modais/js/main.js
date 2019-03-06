$(function(){

    // configurações modal
    $('#modal01').modal({
        backdrop : false,
        keyboard : false
    });

    $('#modal01').modal('show');

    setInterval(function(){
        $('#modal01').modal('hide');
    }, 3000);

    setInterval(function(){
        $('#modal01').modal('show');
    }, 4000);

});