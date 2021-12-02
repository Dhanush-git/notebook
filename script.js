function show_menu() {
    console.log("display side bar");
    const side_bar = document.getElementById('side-bar')
    const page = document.getElementById('page')
    side_bar.classList.add('show')
    page.classList.add('hide')
}

function hide_menu() {
    console.log("hide side bar");
    const side_bar = document.getElementById('side-bar')
    const page = document.getElementById('page')
    side_bar.classList.remove('show')
    page.classList.remove('hide')
}