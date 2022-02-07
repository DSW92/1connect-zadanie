(function($) {
    $(document).ready(function() {
        
        // form validation
        var lettersRegExp = /^[a-zA-Z\s]*$/;
        var emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        var passwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        var firstName = $('input[type="text"]#first_name');
        var lastName = $('input[type="text"]#last_name');
        var email = $('input[type="email"]#email');
        var password = $('input[type="password"]#password');
        var passwordCheck = $('input[type="password"]#password-check');

        function validateTextField(element) {
            element.keyup( function() {
                if ($(this).val().match(lettersRegExp) && $(this).val().length != 0) {
                    $(this).css('outline', '1px solid #42D4AD');
                } else {
                    $(this).css('outline', '1px solid #DE4646');
                }
            });
        };

        function validateEmailField(element) {
            element.keyup( function() {
                if ($(this).val().match(emailRegExp) && $(this).val().length != 0) {
                    $(this).css('outline', '1px solid #42D4AD');
                } else {
                    $(this).css('outline', '1px solid #DE4646');
                }
            });
        };

        function validatePasswdField(element) {
            element.keyup( function() {
                if ($(this).val().match(passwdRegExp) && $(this).val().length != 0) {
                    $(this).css('outline', '1px solid #42D4AD');
                } else {
                    $(this).css('outline', '1px solid #DE4646');
                }
            })
        };

        function checkIfPasswdsMatch(element) {
            element.keyup( function() {
                if ($(this).val().match(passwdRegExp) && $(this).val().length != 0 && $(this).val() === password.val()) {
                    $(this).css('outline', '1px solid #42D4AD');
                } else {
                    $(this).css('outline', '1px solid #DE4646');
                }
            });
        }

        $('#registration-form').submit(function(event) {
            event.preventDefault();

            if( firstName.val().match(lettersRegExp) && firstName.val().length !=0 && lastName.val().match(lettersRegExp) && lastName.val().length != 0 && email.val().match(emailRegExp) && password.val().match(passwdRegExp) && (passwordCheck.val() === password.val()) ) {
                $('.loader__wrapper').addClass('loader__wrapper--active');
                $('body').css('overflow', 'hidden');

                $('.form-validation-message-box').empty();
            } else if (firstName.val().match(lettersRegExp) && firstName.val().length !=0 && lastName.val().match(lettersRegExp) && lastName.val().length != 0 && email.val().match(emailRegExp) && !password.val().match(passwdRegExp)) {
                $('.form-validation-message-box').empty();
                if( $('.form-validation-message-box').empty() ) {
                    $('.form-validation-message-box').append('<p>Hasło powinno zawierać conajmniej 8 znaków, w tym jedną literę, jedną cyfrę oraz jeden znak specjalny</p>');
                } else {
                    return;
                }
            } else if (firstName.val().match(lettersRegExp) && firstName.val().length !=0 && lastName.val().match(lettersRegExp) && lastName.val().length != 0 && email.val().match(emailRegExp) && password.val().match(passwdRegExp) && (passwordCheck.val() !== password.val())) {
                $('.form-validation-message-box').empty();
                if( $('.form-validation-message-box').empty() ) {
                    $('.form-validation-message-box').append('<p>Hasła różnią się</p>');
                } else {
                    return;
                }    
            } else {
                $('.form-validation-message-box').empty();
                if (!password.val().match(passwdRegExp)) {
                    if( $('.form-validation-message-box').empty() ) {
                        $('.form-validation-message-box').append('<p>Proszę wprowadzić poprawne dane</p>');
                        $('.form-validation-message-box').append('<p>Hasło powinno zawierać conajmniej 8 znaków, w tym jedną literę, jedną cyfrę oraz jeden znak specjalny</p>');
                    } else {
                        return;
                    }
                } else if (password.val().match(passwdRegExp) && (passwordCheck.val() !== password.val())) {
                    if( $('.form-validation-message-box').empty() ) {
                        $('.form-validation-message-box').append('<p>Proszę wprowadzić poprawne dane</p>');
                        $('.form-validation-message-box').append('<p>Hasła różnią się</p><br>');
                    } else {
                        return;
                    }
                } else {
                    if( $('.form-validation-message-box').empty() ) {
                        $('.form-validation-message-box').append('<p>Proszę wprowadzić poprawne dane</p>');
                    } else {
                        return;
                    }
                }
            }
        });



        validateTextField(firstName);
        validateTextField(lastName);
        validateEmailField(email);
        validatePasswdField(password);
        checkIfPasswdsMatch(passwordCheck);

    });
})(jQuery);