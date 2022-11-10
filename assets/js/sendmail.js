$('#form-contact').on('submit', function (e) {
    e.preventDefault();

    var nombre = $('#nombre').val();
    var asunto = $('#asunto').val();
    var email = $('#email').val();
    var msg = $('#mensaje').val();
    var lang = "es";


    //Obtenemos el lenguage
    if (window.location.hash && window.location.hash == "#en") {
        lang = "en"
    }

    if (nombre == "" || asunto == "" || email == "" || msg == "") {
        if (lang == "es") {
            $('#alerta').html(`<div class="error"><i class="fa-light fa-circle-exclamation"></i> Revisa que los campos no estén vacios</div>`)
        } else {
            $('#alerta').html(`<div class="error"><i class="fa-light fa-circle-exclamation"></i> Verify that the fields are not empty.</div>`)
        }
    } else {
        $('#btn-send').prop('disabled', true).html('<i class="fa-light fa-paper-plane-top fa-beat-fade"></i> Enviando');

        var datos = new FormData();
        datos.append('nombre', nombre);
        datos.append('asunto', asunto);
        datos.append('email', email);
        datos.append('msg', msg);
        datos.append('lang', lang)

        fetch('./includes/sendmail/send.php', {
            method: 'POST',
            body: datos
        }).then(response => response.json())
            .then(function (res) {
                $('#alerta').html(`<div class="${res.tipo}"><i class="bi bi-envelope-check"></i> ${res.msg}</div>`).fadeIn(300);
                setTimeout(function () {
                    $(`#alerta ${res.tipo}`).fadeOut(300)
                }, 2000);

                $('#btn-send').prop('disabled', false).html('<i class="bi bi-send"></i> Enviar');

                if (res.tipo === "success") {
                    $('#form-contact')[0].reset();
                }

            })
    }
})