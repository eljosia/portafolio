function loadMenu(activo) {
    $.ajax({
        type: "GET",
        url: `./includes/menu.html`,
        data: {},
        success: function (data) {
            $("#menu").html(data);
            $(`#menu .${activo}`).addClass("active");
        }
    })
}
function loadpage(pagina) {
    $('section .load').load(`./pages/${pagina}.html`).fadeIn(400);
    // $.ajax({
    //     type: "GET",
    //     url: `./pages/${pagina}.html`,
    //     data: {},
    //     success: function (data) {
    //         $('section .load').html(data).fadeIn(400);
    //     }
    // })
}