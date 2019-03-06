$(document).ready(function(){
    
    $('#colorpicker').minicolors({
        animationSpeed : 500,
        animationEasing : 'swing',
        change : function(hex, opacity){
            //alert(hex + ' ' + opacity);
        },
        control : 'hue', // habilita os controles do elemento.
        letterCase : 'lowerCase',
        postion : 'bottom left'
    });

});
