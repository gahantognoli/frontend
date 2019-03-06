$(document).ready(function() {
  $("table tr:even").addClass("par");

  $("table thead tr th")
    .prepend("+ ")
    .css("cursor", "pointer");

  $("table thead tr th").each(function(i) {
    
    var nomeColuna = $(this).text();

    $("td:nth-child(" + (i + 1) + ")").hover(
      function() {
        
        var nomeCelula = $(this).text();
        $(this)
          .addClass("hover")
          .prepend('<span class="tooltip">Coluna: ' + nomeColuna + '<br /> Celula: ' + nomeCelula + '</span>');

        $(this).on('click', function(){
          $('tr, td').removeClass('hover');
          $('.tooltip').remove();
          $('tr:contains('+ nomeCelula +')').addClass('hover');
        });

      },

      function() {
        $(this).removeClass("hover");
        $(".tooltip").remove();
      }

    );
  });
});
