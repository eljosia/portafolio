$('#menu a').on('click', function (e) {
    e.preventDefault();
    var pagina = $(this).attr('href').replace('#', "");
    $('section .load').fadeOut(500)
    setTimeout(function () {
        loadpage(pagina);
    }, 400)
})