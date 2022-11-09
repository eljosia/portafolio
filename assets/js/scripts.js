$('#menu a').on('click', function (e) {
    e.preventDefault();
    if ($(this).attr('href')) {
        var pagina = $(this).attr('href').replace('#', "");
        $('section .load').fadeOut(500)
        setTimeout(function () {
            loadpage(pagina);
        }, 400)
    }
})