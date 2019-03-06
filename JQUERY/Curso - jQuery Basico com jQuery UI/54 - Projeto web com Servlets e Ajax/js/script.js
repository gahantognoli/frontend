$(document).ready(function(){

    $('input').on('click', function(){
        $.ajax({
            type : 'GET',
            url : 'exemplo.txt',
            dataType : 'text',
            success : function(data) {
                alert(data);
            }
        });
    });

});