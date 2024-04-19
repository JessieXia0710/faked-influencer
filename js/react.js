function showContent(id) {

    var contentDivs = document.querySelectorAll('#text-container > div');

    contentDivs.forEach(function (div) {
        if (div.id === id) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

    window.location.hash = '#' + id;
}
