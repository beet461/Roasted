function position() {
    var page = document.documentElement;
    var button = document.getElementById('gen-btn');
    button.style.position = 'absolute';
    button.style.left = `${page.clientWidth / 2 - 300}px`;
    button.style.top = `${page.clientHeight / 2 - 75}px`;
}
position();
