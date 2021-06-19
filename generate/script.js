function position() {
    var page = document.documentElement;
    var cbCont = document.getElementById('cb-cont');
    cbCont.style.position = 'absolute';
    cbCont.style.left = `${page.clientWidth / 2 - 250}px`;
    cbCont.style.top = `${page.clientHeight / 2 - 100}px`;
}
position();


function generate() {  
    var fn = `lvl${Math.floor(Math.rand()*4)+1}`
}
