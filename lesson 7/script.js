(function($){
    $(function(){
        $('#birthday').datepicker({dateFormat: "yy-mm-dd"});
        $('#progressbar').progressbar({value: 0, max: 7});
        $(document).on('click', '#button-check-data', function(event) {
            $.post('../validator/validator.php', $('#form').serialize(), function(data, textStatus) {
                var errorMessage = '';
                var badFieldCount = 0;
                console.log(data);
                if (data.result == false) {
                    if (data.error['Username'] != undefined) {
                        $('#username').addClass('error').effect('shake');
                        errorMessage += data.error['Username'];
                        badFieldCount++;
                    } else {
                        $('#username').removeClass('error');
                    }
                    if (data.error['Password'] != undefined) {
                        $('#password').addClass('error');
                        errorMessage += '<br>' + data.error['Password'];
                        badFieldCount++;
                    } else {
                        $('#password').removeClass('error');
                    }
                    if (data.error['Email'] != undefined) {
                        $('#email').addClass('error');
                        errorMessage += '<br>' + data.error['Email'];
                        badFieldCount++;
                    } else {
                        $('#email').removeClass('error');
                    }
                    if (data.error['Credit Card'] != undefined) {
                        $('#ccard').addClass('error');
                        errorMessage += '<br>' + data.error['Credit Card'];
                        badFieldCount++;
                    } else {
                        $('#ccard').removeClass('error');
                    }
                    if (data.error['Bio'] != undefined) {
                        $('#bio').addClass('error');
                        errorMessage += '<br>' + data.error['Bio'];
                        badFieldCount++;
                    } else {
                        $('#bio').removeClass('error');
                    }
                    if (data.error['Birth'] != undefined) {
                        $('#birthday').addClass('error');
                        errorMessage += '<br>' + data.error['Birth'];
                        badFieldCount++;
                    } else {
                        $('#birthday').removeClass('error');
                    }
                } else {
                    $('#username').removeClass('error');
                    $('#password').removeClass('error');
                    $('#email').removeClass('error');
                    $('#ccard').removeClass('error');
                    $('#bio').removeClass('error');
                    $('#birthday').removeClass('error');
                }
                $('#progressbar').progressbar('option', 'value', 7 - badFieldCount);
                $('#errorMessage').html(errorMessage).dialog({buttons: [{text: "Принять", icons: {primary: "ui-icon-heart"},
                    click: function() {
                        $(this).dialog( "close" );
                    }}
                ], modal: true, title: 'Неверные поля!'});
            }, 'json');
            event.preventDefault();
        });
    });
})(jQuery);