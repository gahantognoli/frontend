$(document).ready(function() {
  
  $("table tr:even").addClass("par");
  $('.divisor th').prepend('<img src="img/remove.png" />');
  $('tr:not(.divisor)').hide();

  $('img').on('click', function(){
    if($(this).attr("src") == 'img/add.png'){
      $(this).attr('src', 'img/remove.png');
      $(this).parents().siblings('tr').slideUp('fast');
    }
    else{
      $(this).attr('src', 'img/add.png');
      $(this).parents().siblings('tr').slideDown('fast');
    }

  });

});
