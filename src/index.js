import './styles/home.css';
import nav from './nav.js';
import aboutPage from './about.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import footerComponent from './footer.js';

const content = document.createElement('div');
    content.id='content';
    document.body.appendChild(content);

content.appendChild(nav());

const main = document.createElement('main');
    content.appendChild(main);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.innerHTML.toLowerCase();
            main.innerHTML = '';
            switch(page){
                case 'home':
                    main.appendChild(homePage());
                    break;
                case 'menu':
                    main.appendChild(menuPage());
                    break;
                case 'contact':
                    main.appendChild(contactPage());
                    break;
                case 'about':
                    main.appendChild(aboutPage());
                    break;
            }
        });
    });



//home page
const home = document.createElement('div');
        home.id='home';

function heroComponent(){
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroTitle = document.createElement('h1');
    heroTitle.innerHTML='Restaurant Teriff';
    hero.appendChild(heroTitle);
    const heroSubtitle = document.createElement('h3');
    heroSubtitle.innerHTML='Niciun fel de legătură cu Sheriff';
    hero.appendChild(heroSubtitle);
    const heroParagraph = document.createElement('p');
    heroParagraph.innerHTML = 'Servim cu drag în:';
    hero.appendChild(heroParagraph);
    const heroList = document.createElement('ul');
    heroList.id='locations';

    const heroListItem1 = document.createElement('li');
    const heroListItem1Para1 = document.createElement('p');
    heroListItem1Para1.classList.add('place');
    heroListItem1Para1.innerHTML='Târgoviște';
    heroListItem1.appendChild(heroListItem1Para1);
    const heroListItem1Para2 = document.createElement('p');
    heroListItem1Para2.classList.add('addr');
    heroListItem1Para2.innerHTML='Aleea Sinaia, nr. 3 (peste drum de Sheriff)';
    heroListItem1.appendChild(heroListItem1Para2);
    const heroListItem1Para3 = document.createElement('p');
    heroListItem1Para3.classList.add('addr');
    heroListItem1Para3.innerHTML='micro 4, Piața Aurora';
    heroListItem1.appendChild(heroListItem1Para3);
    heroList.appendChild(heroListItem1);

    const heroListItem2 = document.createElement('li');
    const heroListItem2Para1 = document.createElement('p');
    heroListItem2Para1.classList.add('place');
    heroListItem2Para1.innerHTML='Aninoasa';
    heroListItem2.appendChild(heroListItem2Para1);
    const heroListItem2Para2 = document.createElement('p');
    heroListItem2Para2.classList.add('addr');
    heroListItem2Para2.innerHTML='Strada Ungaria, nr. 1';
    heroListItem2.appendChild(heroListItem2Para2);
    heroList.appendChild(heroListItem2);

    hero.appendChild(heroList);
    return hero;
}   home.appendChild(heroComponent());

function testimonialsComponent(){
    const testimonials = document.createElement('div');
        testimonials.classList.add('testimonials');
    const testimonialsTitle = document.createElement('h2');
        testimonialsTitle.innerHTML='Ce spun clienții noștri';
        testimonials.appendChild(testimonialsTitle);
    
    const testimonial1 = document.createElement('div');
        testimonial1.classList.add('testimonial');
    const testimonial1Text = document.createElement('p');
    testimonial1Text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.";
    const testimonial1Author = document.createElement('h3');
    testimonial1Author.innerHTML = "John Doe";
    testimonial1.appendChild(testimonial1Text);
    testimonial1.appendChild(testimonial1Author);

    const testimonial2 = document.createElement('div');
        testimonial2.classList.add('testimonial');
    const testimonial2Text = document.createElement('p');
    testimonial2Text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.";
    const testimonial2Author = document.createElement('h3');
    testimonial2Author.innerHTML = "John Doe";
    testimonial2.appendChild(testimonial2Text);
    testimonial2.appendChild(testimonial2Author);

    testimonials.appendChild(testimonial1);
    testimonials.appendChild(testimonial2);
    
    return testimonials;
}   home.appendChild(testimonialsComponent());
main.appendChild(home);

//about page
    main.appendChild(aboutPage());

//contact page
    main.appendChild(contactPage());

//menu page
    main.appendChild(menuPage());

content.appendChild(footerComponent());


