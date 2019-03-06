$(document).ready(function() {
  $('#paragrafo2')
    .on('click', function(){
      $('#paragrafo1').text('Click Event!');
    })
    .on('dblclick', function(){
      $('#paragrafo1').text('Double click Event!');
    })
    .on('mousedown', function(){
      $('#paragrafo1').text('Mouse down Event!');
    })
    .on('mouseup', function(){
      $('#paragrafo1').text('Mouse up Event!');
    })
    .on('mouseover', function(){
      $('#paragrafo1').text('Mouse over Event!');
    })
    .on('mouseout', function(){
      $('#paragrafo1').text('Mouse out Event!');
    })
    .on('mouseleave', function(){
      $('#paragrafo1').text('Mouse leave Event!');
    })
    .on('mouseenter', function(){
      $('#paragrafo1').text('Mouse enter Event!');
    })
    .on('mousemove', function(){
      $('#paragrafo1').text('Mouse move Event!');
    })
    /*.toggle(function(){
      $('#paragrafo1').text('Toggle Event!');
    })*/;
});
