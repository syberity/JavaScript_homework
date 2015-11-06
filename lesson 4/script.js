(function($){
    $(function(){
        $(document).on('click','.tabs-caption li', function() {
            $('.tabs-caption li').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content').hide().eq($(this).index()).show();
        })
    });
})(jQuery);