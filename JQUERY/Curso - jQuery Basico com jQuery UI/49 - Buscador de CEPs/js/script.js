$(document).ready(function(){
    $('#cep').jZipCode({
        streetTarget : '#rua',
        districtTarget : '#distrito',
        cityTarget : '#cidade',
        stateTarget : '#estado',
        keyUpDelay : 1500,
        multipleReturns : '#multi',
        showMap : 'map'
    });
});