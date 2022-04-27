import './styles/home.css';
import nav from './nav.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import footerComponent from './footer.js';
import homePage from './home.js';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

content.appendChild(nav());

const main = document.createElement('main');
content.appendChild(main);

const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.innerHTML.toLowerCase();
        console.log(page);
        main.innerHTML = '';
        switch (page) {
            case 'home':
                main.appendChild(homePage());
                break;
            case 'menu':
                main.appendChild(menuPage());
                break;
            case 'contact':
                main.appendChild(contactPage());
                break;
            default:
                main.appendChild(homePage());
                break;
        }
    });
});

//home page shown by default
main.appendChild(homePage());

content.appendChild(footerComponent());


