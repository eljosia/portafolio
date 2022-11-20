function loadMenu(activo) {
    $.ajax({
        type: "GET",
        url: `./includes/menu.html?v=2`,
        data: {},
        success: function (data) {
            $("#menu").html(data);
            $(`#menu .${activo}`).addClass("active");
            $(`#menu .${activo}`).removeAttr('href');
        }
    })
}
function loadpage(pagina) {
    $('section .load').load(`./pages/${pagina}.html?v=2`).fadeIn(400);
}
function loadFooter(){
    $('#footer').load(`./includes/footer.html`)
}
function loadProyect()
{
    var div  = "#load-proyects"
    var dir  = "./includes/proyects"
    
    $.ajax({
        url: "./includes/scan.php",
        dataType: 'json',
        success: function(data) {
         $.each(data, function(i){
            $.get(`${dir}/${data[i]}`, function(codigo){
                $(div).append(codigo);
            });
         });
        }
       });
}