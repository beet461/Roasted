var generateDiv = document.createElement('div');
var generateButton = document.createElement('button');

var spacer = document.createElement('div')
spacer.className = 'nav-element spacer'

var logoDiv = document.createElement('div');
var logoImage = document.createElement('img');

var spacer2 = document.createElement('div')
spacer2.className = 'nav-element spacer'

var aboutDiv = document.createElement('div');
var aboutButton = document.createElement('button');

function href(place) {
    let hostName = window.location.hostname;
    let currentHref = window.location.href.split(
        `https://${hostName}/Roasted/`
    );
    if (currentHref[1] === '') {
        return `./${place}`;
    } else if (currentHref[1] !== '') {
        return `../${place}`;
    }
}

function item(parent, parentClass, child, childClass, childHtml, onclick) {
    parent.className = parentClass
    child.innerHTML = childHtml
    child.className = childClass
    child.onclick = onclick
    parent.appendChild(child)
}

function create() {
    item(generateDiv, 'nav-element end-divs', generateButton, 'generate-button', 'GENERATE', function () { window.location.href = href('generate/index.html') })

    logoImage.src = href('assets/images/logo_transparent.gif');
    item(logoDiv, 'nav-element logo', logoImage, '', '', function () { window.location.href = href('') })

    item(aboutDiv, 'nav-element end-divs', aboutButton, 'about-button', 'ABOUT', function () { window.location.href = href('about/index.html') })

    var nav = document.getElementById('nav')
    nav.className = 'nav-bar'
    nav.appendChild(generateDiv);
    nav.appendChild(spacer);
    nav.appendChild(logoDiv);
    nav.appendChild(spacer2);
    nav.appendChild(aboutDiv);
}

create();