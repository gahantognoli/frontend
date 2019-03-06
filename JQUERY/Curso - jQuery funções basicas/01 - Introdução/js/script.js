$(document).ready(function(){

    $(".item1").on("click", function(){
        $(this).addClass("blue");
    });

    $(".item2").on("click", function(){
        $(this).removeClass("blue");
    });

    $(".item3").on("click", function(){
        $(this).toggleClass("blue");
    });

});