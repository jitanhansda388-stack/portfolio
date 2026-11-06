// =========================
// navbar toggle 
// =========================
let menu_header = document.getElementById('menu-header');
let menu_close_btn = document.getElementById('menu-close-btn');
let header_middle_mobile = document.getElementById('navbar-mobile')
let cover_box = document.getElementById('cover-box');

menu_header.addEventListener('click', menuBtnHeader)
menu_close_btn.addEventListener('click', closeMenu);
cover_box.addEventListener('click', menuCoverRemoveByCover)

function menuBtnHeader() {
    header_middle_mobile.classList.add('toggle-menu')
    cover_box.classList.add('toggle-menu')
}

function closeMenu() {
    header_middle_mobile.classList.remove('toggle-menu')
    cover_box.classList.remove('toggle-menu')
}

function menuCoverRemoveByCover() {
    header_middle_mobile.classList.remove('toggle-menu')
    cover_box.classList.remove('toggle-menu')
}