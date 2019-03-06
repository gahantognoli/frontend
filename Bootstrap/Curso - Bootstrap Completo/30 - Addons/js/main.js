$(function(){

   $('.btn-js').button();
   
    $('#btnCarregar').on('click', function(){
        var btn = $(this);
        btn.button('loading');

        setInterval(function(){
            btn.button('reset');
        }, 3000);

    });

});