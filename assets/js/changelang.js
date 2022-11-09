var textsToChange = document.querySelectorAll('[data-section]');

var cambiarlengua = async language => {
    var requestJson = await fetch(`./assets/js/lang/${language}.json`);
    var texts = await requestJson.json();

    for (var textToChange of textsToChange) {
        var section = textToChange.dataset.section;
        var value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

$('#idioma a').on('click', function () {
    cambiarlengua($(this).attr('data-language'))
})

if (window.location.hash && window.location.hash == "#es" || window.location.hash == "#en") {
    cambiarlengua(window.location.hash.replace("#", ""))
} else {
    history.replaceState(null, document.title, location.pathname + location.search)
    cambiarlengua("es");
}
