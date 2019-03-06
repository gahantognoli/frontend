$(document).ready(function() {
  
  $(':input').css({
    'border-radius' : '4px',
    'padding' : '6px',
    'font-size' : '16px'
  });

  $('span').css(
    {
      'display': 'none',
      'color' : '#EEE',
      'background-color' : '#222',
      'padding' : '4px',
      'border-radius' : '5px',
      'border' : '1px solid #CCC'
  });

  $(':input')

    .on('focus', function(){
      $(this).next().fadeIn('normal');
    })

    .on('blur', function(){
      $(this).next().fadeOut('normal');
    });

});
