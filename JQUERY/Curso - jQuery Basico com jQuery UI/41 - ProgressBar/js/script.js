$(document).ready(function(){
    
    $('#progress-bar').progressbar({
        value : 30
    });

    $('#progress-bar2').progressbar({
        value : 30
    });

    var progressbar = $('#progress-bar2');

    function progress(){
        var val = progressbar.progressbar("value") || 0;
        progressbar.progressbar("value", val + 1);

        if(val < 99) {
            setTimeout(progress, 200);
        }

        setTimeout(progress, 4000);

    }

});