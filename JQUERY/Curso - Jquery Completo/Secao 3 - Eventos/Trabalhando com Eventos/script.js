$('button').click(function(){
    alert("Click");
});

$('button').mouseover(function(){
    console.log("Passou o mouse!");
});

$( window ).resize(function() {
    $( "body" ).html( "<div>Width:" + $( window ).width() + "</div>" +
     "<div>Height:" + $( window ).height() + "</div>" );
});

$( window ).scroll(function() {
    console.log(window.scrollY)
});

$('#myInput').on('click', function(){
    console.log('Focus Event')
})
.on('focus', function(){
    console.log('Focus In Event')
})
.focusout(function(){
    console.log('Focus Out Event')
})
.blur(function(){
    console.log('Blur Event')
})
.select(function(){
    console.log('select Event')
})
.change(function(){
    console.log('change Event')
})
.keydown(function()
{ 
    console.log('Key Down event') 
})
.keyup(function()
{ 
    console.log('Key Up event') 
})
.keypress(function()
{ 
    console.log('Key Press event') 
})

$('button')
.mousedown(function(){ console.log('Mouse Down event') })
.mouseup(function(){ console.log('Mouse Up event') })
.mouseenter(function(){ console.log('Mouse Enter event') })
.mouseleave(function(){ console.log('Mouse Leave event') })
.mouseout(function(){ console.log('Mouse Out event') })
.mousemove(function(){ console.log('Mouse Move event') })
.mouseover(function(){ console.log('Mouse Over event') })
.hover(function(){ console.log('Hover event') })
.click(function(){ console.log('Click event') })
.dblclick(function(){ console.log('Double Click event') })
.contextmenu(function(){ console.log('Context Menu  event') })

$('button').click(function(event){
    console.log(event)
})