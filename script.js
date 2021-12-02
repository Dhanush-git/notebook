//display side-bar in mobile view
function show_menu() {
    const side_bar = document.getElementById('side-bar')
    const page = document.getElementById('page')
    side_bar.classList.add('show')
    page.classList.add('hide')
}

//hide side-bar in mobile view
function hide_menu() {
    const side_bar = document.getElementById('side-bar')
    const page = document.getElementById('page')
    side_bar.classList.remove('show')
    page.classList.remove('hide')
}

