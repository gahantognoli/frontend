$(document).ready(function() {
  $("input").on("click", function() {
    /* --- Exemplo básico AJAX ---
        $.ajax({
            type : 'GET',
            url : 'exemplo.txt',
            dataType : 'text',
            success : function(data) {
                alert(data);
            }
        });*/

    // Consumindo API publica do Flicker.
    $.getJSON(
      "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      {
        tags: 'rua',
        tagmode: "any",
        format: "json"
      }, 
      function(response){
        $.each(response.items, function(i, item){
            $('#res').append($('<img />').attr('src', item.media.m).css({
                'width' : '300px',
                'height' : '300px'
            })); //colando valor da resposta em uma tag img.
            if(i == 10) return false;     
        });
      }
    );
  });

  /* --- FUNÇÕES NATIVAS AJAX ---
    $(document).ajaxSuccess(function(){
        $('#res').append('Ajax Success!');
    });

    $(document).ajaxStart(function(){
        $('#res').append('Ajax Start!');
    });

    $(document).ajaxStop(function(){
        $('#res').append('Ajax Stop!');
    });

    $(document).ajaxComplete(function(){
        $('#res').append('Ajax Complete');
    });
    */
});
