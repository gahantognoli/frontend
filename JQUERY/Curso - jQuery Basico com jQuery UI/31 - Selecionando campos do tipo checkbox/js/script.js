$(document).ready(function() {
  
  $('body').css({
    'font-family' : 'Segoe UI',
    'font-size' : '14px',
    'padding' : '20px'
  });

  $('table').css({
    'border' : '1px solid #222',
    'width' : '80%'
  });

  $('#selectAll').on('click', function(){
    $(':input[name=email]').attr('checked', 'checked');
  });

  $('#unSelectAll').on('click', function(){
    $(':input[type=checkbox]').removeAttr('checked');
  });

  $('#todos').on('change', function(){
    if(this.checked){
      $('table :input[name=email]').attr('checked', 'checked');
    }else{
      $('table :input[type=checkbox]').removeAttr('checked');
    }
  });

});
