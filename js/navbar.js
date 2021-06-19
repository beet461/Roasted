function home_page() {
    window.location.href = '../index.html';
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

    let doh2 = create_content('h2', '', '', 'GENERATE');
    let doa = create_content(
        'a',
        'text-decoration: none;',
        '../generate/index.html',
        ''
    );
    doa.appendChild(doh2);
    let dodiv = create_div('nav-element donate', doa);

    let spacer = create_div('nav-element spacer', '');
    let spacer2 = create_div('nav-element spacer', '');

    let logo = document.createElement('img');
    let lodiv = create_div('nav-element logo', logo);
    lodiv.setAttribute('onclick', 'home_page()');

    let abh2 = create_content('h2', '', '', 'ABOUT');
    let aba = create_content(
        'a',
        'text-decoration: none;',
        '../about/index.html',
        ''
    );
    aba.appendChild(abh2);
    let abdiv = create_div('nav-element about', aba);

    nav.appendChild(dodiv);
    nav.appendChild(spacer);
    nav.appendChild(lodiv);
    nav.appendChild(spacer2);
    nav.appendChild(abdiv);
}

create();
