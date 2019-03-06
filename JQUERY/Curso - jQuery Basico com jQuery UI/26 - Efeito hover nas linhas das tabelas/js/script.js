$(document).ready(function() {

  $('table tr:even').addClass('par');
  
  $('table tbody tr').hover(
    
    function(){
      $(this).addClass('A');
    }, 
    
    function(){
      $(this).removeClass('A');
    }
  
  );

});
