import './styles/home.css';

let navButton = document.getElementById('borgir');
navButton.addEventListener('click', displayNav);
let navCloseBtn = document.getElementById('menu-close');
navCloseBtn.addEventListener('click', closeNav);

function displayNav() {
    console.log('displayNav');
    let nav = document.getElementById('nav-links');
    nav.style.display = 'flex';
    navCloseBtn.style.display = 'block';
    navButton.style.display = 'none';
}

function closeNav() {
    console.log('closeNav');
    let nav = document.getElementById('nav-links');
    nav.style.display = 'none';
    navCloseBtn.style.display = 'none';
    navButton.style.display = 'block';
}

