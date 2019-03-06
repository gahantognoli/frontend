(function($){
    $.fn.jump = function(){
        $(this)
            .finish()
            .animate({
                'margin-top' : '-35px'
            }, 150)
            .animate({
                'margin-top' : '0px'
            }, 150)
            .animate({
                'margin-top' : '-35px'
            }, 150)
            .animate({
                'margin-top' : '0px'
            }, 150)

        return this;
    }

})(jQuery);