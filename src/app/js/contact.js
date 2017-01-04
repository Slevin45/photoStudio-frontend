$('document').ready(function () {
    $("#contactForm").submit(function () {
        debugger;
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: 'POST',
            url: ' https://photo-studio.herokuapp.com/anon/contact',
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify({name: name, phone: phone, email: email, message: message})
        }).fail(function (error) {
            // alert(error);
        });
        return false;
    });
});