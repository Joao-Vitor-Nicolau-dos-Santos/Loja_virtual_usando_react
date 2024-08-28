const navbarToggle = document.getElementById('navbar-toggle');
const navbarClose = document.getElementById('navbar-close');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.add('fullscreen');
    navbarMenu.classList.add('active');
});

navbarClose.addEventListener('click', () => {
    navbarMenu.classList.remove('fullscreen');
    navbarMenu.classList.remove('active');
});
