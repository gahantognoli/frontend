$(document).ready(function() {

  $('#sanf1').on('click', function(){
    $('#parafrago1').slideUp(1000, function(){ //fast, normal e slow
      alert('Slide Up finished!');
    }); 
  });

  $('#fade1').on('click', function(){
    $('#parafrago1').fadeIn('slow');
  }); 

  $('#sanf2').on('click', function(){
    $('#parafrago1').slideDown(1000, function(){
      alert('Slide down finished!')
    }); //fast, normal e slow
  });

  $('#fade2').on('click', function(){
    $('#parafrago1').fadeOut('slow');
  });

  $('#sanf3').on('click', function(){
    $('#paragrafo2').slideToggle(100);
  });

  $('#sanf4').on('click', function(){
    $('#paragrafo2').fadeToggle(2000);
  });
  
});
