function loadMenu(activo) {
    $.ajax({
        type: "GET",
        url: `./includes/menu.html`,
        data: {},
        success: function (data) {
            $("#menu").html(data);
            $(`#menu .${activo}`).addClass("active");
            $(`#menu .${activo}`).removeAttr('href');
        }
    })
}
function loadpage(pagina) {
    $('section .load').load(`./pages/${pagina}.html`).fadeIn(400);
}
function loadFooter(){
    $('#footer').load(`./includes/footer.html`)
}