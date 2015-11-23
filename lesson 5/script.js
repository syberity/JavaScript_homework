(function($){
    $(function(){
        $(document).on('click', '#button-check-data', function(event) {
             var params = { 'username': $('#username').val(),
                'password': $('#password').val(),
                'email': $('#email').val(),
                 'gender': $('#sex-male').attr('checked') ? 'm' : 'f',
                'credit-card': $('#ccard').val(),
                'bio': $('#bio').val() };
            $.post('../validator/validator.php', params, function(data, textStatus) {
                console.log(data);
                console.log(textStatus);
            });
            event.preventDefault();
        });
    });
})(jQuery);