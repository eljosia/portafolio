function loadMenu(activo) {
  $.ajax({
    type: "GET",
    url: `./includes/menu.html?v=2`,
    data: {},
    success: function (data) {
      $("#menu").html(data);
      $(`#menu .${activo}`).addClass("active");
      $(`#menu .${activo}`).removeAttr("href");
    },
  });
}
function loadpage(pagina) {
  $("section .load").load(`./pages/${pagina}.html?v=2`).fadeIn(400);
}
function loadFooter() {
  $("#footer").load(`./includes/footer.html`);
};

function loadProyect() {
  const div = "#load-proyects";
  const dir = "./includes/proyects";

  let projects = JSON.parse(localStorage.getItem("projects")) || [
    "biblioteca.html",
    "chesflix.html",
    "qikmenu.html",
  ];

  projects.forEach((file) => {
    $.get(`${dir}/${file}`)
      .done((content) => $(div).append(content))
      .fail((error) => console.error(`Error al cargar ${file}:`, error));
  });
};

// Para actualizar manualmente la lista de proyectos:
const updateProjects = (newProjects) => {
  localStorage.setItem("projects", JSON.stringify(newProjects));
};
