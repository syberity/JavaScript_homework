(function($){
    $(function(){
        $(document).on('click', '#button-check-data', function(event) {
            var params = { 'username': $('#username').val(),
                'password': $('#password').val(),
                'email': $('#email').val(),
                'gender': $('#sex-male').attr('checked') ? 'm' : 'f',
                'credit_card': $('#ccard').val(),
                'bio': $('#bio').val() };
            $.post('../validator/validator.php', params, function(data, textStatus) {
                var errorMessage = '';
                console.log(data);
                if (data.result == false) {
                    if (data.error['Username'] != undefined) {
                        $('#username').addClass('error');
                        errorMessage += data.error['Username'];
                    } else {
                        $('#username').removeClass('error');
                    }
                    if (data.error['Password'] != undefined) {
                        $('#password').addClass('error');
                        errorMessage += '<br>' + data.error['Password'];
                    } else {
                        $('#password').removeClass('error');
                    }
                    if (data.error['Email'] != undefined) {
                        $('#email').addClass('error');
                        errorMessage += '<br>' + data.error['Email'];
                    } else {
                        $('#email').removeClass('error');
                    }
                    if (data.error['Credit Card'] != undefined) {
                        $('#ccard').addClass('error');
                        errorMessage += '<br>' + data.error['Credit Card'];
                    } else {
                        $('#ccard').removeClass('error');
                    }
                    if (data.error['Bio'] != undefined) {
                        $('#bio').addClass('error');
                        errorMessage += '<br>' + data.error['Bio'];
                    } else {
                        $('#bio').removeClass('error');
                    }
                } else {
                    $('#username').removeClass('error');
                    $('#password').removeClass('error');
                    $('#email').removeClass('error');
                    $('#ccard').removeClass('error');
                    $('#bio').removeClass('error');
                }
                $('#errorMessage').html(errorMessage);
            }, 'json');
            event.preventDefault();
        });
    });
})(jQuery);