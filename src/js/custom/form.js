$(document).ready(function () {
    $(".input-block").each(function(){
        var input = $(this).children(".form__field");
        var decorLine = $(this).children(".check-line");
        var label = $(this).children(".input__title");
        input.blur(function() {
            decorLine.removeClass("active-line");
            label.removeClass("active-title");
          })
          .focus(function() {
            decorLine.addClass("active-line");
            label.addClass("active-title");
          });
    });

    $("#contactForm").validate({
        rules: {
            clientName: {
                required: true,
                minlength: 3
            },
            clientEmail: {
                required: true,
                email: true
            },           
            clientContact: {
                minlength: 3
            },
            clientMessage: {
                required: true,
                minlength: 10,
                maxlength: 400
            }
        }   
    });

    $('input[type="file"]').change(function () {
        var value = $("input[type='file']").val();
        $('.js-value').text(value);
    });

});