function home_page() {
    return '../index.html';
}

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

function create_content(elem, eclass, ehref, ehtml) {
    var element = document.createElement(elem);
    element.style = eclass;
    element.href = ehref;
    element.innerHTML = ehtml;
    return element;
}

function create_div(eclass, content) {
    var div = document.createElement('div');
    div.className = eclass;
    if (content != '') {
        div.appendChild(content);
    }
    return div;
}

function create() {
    let nav = document.getElementById('nav');
    nav.className = 'nav-bar';

    let genh2 = create_content('h2', '', '', 'GENERATE');
    let gena = create_content(
        'a',
        'text-decoration: none;',
        href('generate/index.html'),
        ''
    );
    gena.appendChild(genh2);
    let gendiv = create_div('nav-element donate', gena);

    let spacer = create_div('nav-element spacer', '');
    let spacer2 = create_div('nav-element spacer', '');

    let logo = document.createElement('img');
    logo.src = '../assets/images/logo_transparent.gif';
    let lodiv = create_div('nav-element logo', logo);
    lodiv.href = href('');

    let abh2 = create_content('h2', '', '', 'ABOUT');
    let aba = create_content(
        'a',
        'text-decoration: none;',
        href('about/index.html'),
        ''
    );
    aba.appendChild(abh2);
    let abdiv = create_div('nav-element about', aba);

    nav.appendChild(gendiv);
    nav.appendChild(spacer);
    nav.appendChild(lodiv);
    nav.appendChild(spacer2);
    nav.appendChild(abdiv);
}

create();
