import './styles/home.css';

const content = document.getElementById('content');
const main = document.createElement('main');

function displayNav() {
    console.log('displayNav');
    let nav = document.getElementById('nav-links');
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';

    let navButton = document.getElementById('borgir');
    let navCloseBtn = document.getElementById('menu-close');
    navCloseBtn.style.visibility = 'visible';
    navCloseBtn.style.opacity = '1';
    navCloseBtn.style.position = 'relative';

    navButton.style.visibility = 'hidden';
    navButton.style.opacity = '0';
}

function closeNav() {
    console.log('closeNav');
    let nav = document.getElementById('nav-links');
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';

    let navButton = document.getElementById('borgir');
    let navCloseBtn = document.getElementById('menu-close');
    navCloseBtn.style.visibility = 'hidden';
    navCloseBtn.style.opacity = '0';
    navCloseBtn.style.position = 'absolute';

    navButton.style.visibility = 'visible';
    navButton.style.opacity = '1';
}

function nav(){
    const nav = document.createElement('div');
    nav.id='nav';
    const logo = document.createElement('div');
    logo.id='logo';
    const logoLink = document.createElement('a');
    logoLink.href='#';
    const logoImg = document.createElement('img');
    logoImg.src='../src/img/icon.png';
    logoImg.alt='logo';
    logoImg.style.width='40px';
    logoLink.appendChild(logoImg);
    logo.appendChild(logoLink);
    nav.appendChild(logo);

    const navLinks = document.createElement('ul');
    navLinks.id='nav-links';
    const navLink1 = document.createElement('li');
    const navLink1Link = document.createElement('a');
    navLink1Link.href='#';
    navLink1Link.innerHTML='Home';
    navLink1.appendChild(navLink1Link);
    navLinks.appendChild(navLink1);
    const navLink2 = document.createElement('li');
    const navLink2Link = document.createElement('a');
    navLink2Link.href='#';
    navLink2Link.innerHTML='Menu';
    navLink2.appendChild(navLink2Link);
    navLinks.appendChild(navLink2);
    const navLink3 = document.createElement('li');
    const navLink3Link = document.createElement('a');
    navLink3Link.href='#';
    navLink3Link.innerHTML='Contact';
    navLink3.appendChild(navLink3Link);
    navLinks.appendChild(navLink3);
    const navLink4 = document.createElement('li');
    const navLink4Link = document.createElement('a');
    navLink4Link.href='#';
    navLink4Link.innerHTML='About';
    navLink4.appendChild(navLink4Link);
    navLinks.appendChild(navLink4);
    nav.appendChild(navLinks);

    const navButton = document.createElement('div');
    navButton.id='borgir';
    navButton.innerHTML='&#9776;';
    navButton.style.color='white';
    navButton.addEventListener('click', displayNav);
    nav.appendChild(navButton);

    const navCloseBtn = document.createElement('div');
    navCloseBtn.id='menu-close';
    navCloseBtn.innerHTML='&times;';
    navCloseBtn.style.color='white';
    navCloseBtn.addEventListener('click', closeNav);
    nav.appendChild(navCloseBtn);

    //function that detects scrolling direction
    let lastScrollY = 0;
    window.addEventListener('scroll', function(){
        let currentScrollY = window.scrollY;
        if(currentScrollY > lastScrollY){
            nav.style.visibility = 'hidden';
            nav.style.opacity = '0';
        }
        else{
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        }
        lastScrollY = currentScrollY;
    });


    return nav;
} content.prepend(nav());

content.appendChild(main);

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
}   main.appendChild(heroComponent());

function storyComponent(){
    const story = document.createElement('div');
    story.classList.add('story');
    const storyTitle = document.createElement('h2');
    storyTitle.innerHTML='Povestea Teriff';
    story.appendChild(storyTitle);
    const storyParagraph1 = document.createElement('p');
    storyParagraph1.classList.add('secondary');
    storyParagraph1.innerHTML='lorem ipsum dolor sit';
    story.appendChild(storyParagraph1);
    const storyParagraph2 = document.createElement('p');
    storyParagraph2.innerHTML=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nam qui dicta architecto eligendi.
    Possimus molestias sapiente cumque vel non nihil corporis, est asperiores. Dolorem, obcaecati quos!
    Eaque, modi blanditiis!
    Repellat, ipsum omnis molestias repellendus iusto fugit fuga adipisci iste ratione? Dicta voluptatum
    mollitia enim voluptas, maiores commodi maxime similique quae, in praesentium molestiae aliquam ipsa
    quaerat fuga perspiciatis. Corporis?`;
    story.appendChild(storyParagraph2);
    return story;
}  main.appendChild(storyComponent());

function flagshipsComponent(){
    const flagships = document.createElement('div');
    flagships.classList.add('flagships');
    const flagshipsTitle = document.createElement('h2');
    flagshipsTitle.innerHTML='Specialitățile Teriff';
    flagships.appendChild(flagshipsTitle);
    const flagshipsParagraph = document.createElement('p');
    flagshipsParagraph.classList.add('secondary');
    flagshipsParagraph.innerHTML='renumite mondial';
    flagships.appendChild(flagshipsParagraph);
    const flagship1 = document.createElement('div');
    flagship1.classList.add('flagship');
    flagship1.id="spicy-crunch";
    const flaghsip1Title = document.createElement('h3');
    flaghsip1Title.innerHTML='Spicy Crunch Sandwich';
    flagship1.appendChild(flaghsip1Title);
    flagships.appendChild(flagship1);
    const flagship2 = document.createElement('div');
    flagship2.classList.add('flagship');
    flagship2.id="chifla-chef";
    const flaghsip2Title = document.createElement('h3');
    flaghsip2Title.innerHTML='Chifla Chef';
    flagship2.appendChild(flaghsip2Title);
    flagships.appendChild(flagship2);
    return flagships;
} main.appendChild(flagshipsComponent());

function menuPreviewComponent(){
    function pizzaPreview (){
        const pizzaPreview = document.createElement('div');
            pizzaPreview.classList.add('pizza-preview');
            const pizzaPreviewItem1 = document.createElement('div');
                pizzaPreviewItem1.classList.add('pizza-preview-item');
                const pizzaPreviewItem1Title = document.createElement('h3');
                    pizzaPreviewItem1Title.innerHTML='Pizza Margherita';
                    pizzaPreviewItem1.appendChild(pizzaPreviewItem1Title);
                pizzaPreview.appendChild(pizzaPreviewItem1);
            const pizzaPreviewItem2 = document.createElement('div');
                pizzaPreviewItem2.classList.add('pizza-preview-item');
                const pizzaPreviewItem2Title = document.createElement('h3');
                    pizzaPreviewItem2Title.innerHTML='Pizza Capriciosa';
                    pizzaPreviewItem2.appendChild(pizzaPreviewItem2Title);
                pizzaPreview.appendChild(pizzaPreviewItem2);
            const pizzaPreviewItem3 = document.createElement('div');
                pizzaPreviewItem3.classList.add('pizza-preview-item');
                const pizzaPreviewItem3Title = document.createElement('h3');
                    pizzaPreviewItem3Title.innerHTML='Pizza Quattro Stagioni';
                    pizzaPreviewItem3.appendChild(pizzaPreviewItem3Title);
                pizzaPreview.appendChild(pizzaPreviewItem3);
            return pizzaPreview;
    }

    function burgerPreview (){
    const burgerPreview = document.createElement('div');
        burgerPreview.classList.add('burger-preview');
        const burgerPreviewItem1 = document.createElement('div');
            burgerPreviewItem1.classList.add('burger-preview-item');
            const burgerPreviewItem1Title = document.createElement('h3');
                burgerPreviewItem1Title.innerHTML='Burger Classic';
                burgerPreviewItem1.appendChild(burgerPreviewItem1Title);
            burgerPreview.appendChild(burgerPreviewItem1);
        const burgerPreviewItem2 = document.createElement('div');
            burgerPreviewItem2.classList.add('burger-preview-item');
            const burgerPreviewItem2Title = document.createElement('h3');
                burgerPreviewItem2Title.innerHTML='Burger Cheese';
                burgerPreviewItem2.appendChild(burgerPreviewItem2Title);    
            burgerPreview.appendChild(burgerPreviewItem2);
        const burgerPreviewItem3 = document.createElement('div');   
            burgerPreviewItem3.classList.add('burger-preview-item');
            const burgerPreviewItem3Title = document.createElement('h3');   
                burgerPreviewItem3Title.innerHTML='Burger Bacon';
                burgerPreviewItem3.appendChild(burgerPreviewItem3Title);    
            burgerPreview.appendChild(burgerPreviewItem3);
        return burgerPreview;
    }

    function mexicanPreview (){
    const mexicanPreview = document.createElement('div');
        mexicanPreview.classList.add('mexican-preview');
        const mexicanPreviewItem1 = document.createElement('div');  
            mexicanPreviewItem1.classList.add('mexican-preview-item');
            const mexicanPreviewItem1Title = document.createElement('h3');
                mexicanPreviewItem1Title.innerHTML='Quesadilla';
                mexicanPreviewItem1.appendChild(mexicanPreviewItem1Title);      
            mexicanPreview.appendChild(mexicanPreviewItem1);
        const mexicanPreviewItem2 = document.createElement('div');
            mexicanPreviewItem2.classList.add('mexican-preview-item');
            const mexicanPreviewItem2Title = document.createElement('h3');  
                mexicanPreviewItem2Title.innerHTML='Burrito';
                mexicanPreviewItem2.appendChild(mexicanPreviewItem2Title);  
            mexicanPreview.appendChild(mexicanPreviewItem2);
        const mexicanPreviewItem3 = document.createElement('div');  
            mexicanPreviewItem3.classList.add('mexican-preview-item');
            const mexicanPreviewItem3Title = document.createElement('h3');  
                mexicanPreviewItem3Title.innerHTML='Nachos';
                mexicanPreviewItem3.appendChild(mexicanPreviewItem3Title);  
            mexicanPreview.appendChild(mexicanPreviewItem3);
        return mexicanPreview;
    }

    function streedFoodPreview (){
    const streedFoodPreview = document.createElement('div');
        streedFoodPreview.classList.add('streed-food-preview');
        const streedFoodPreviewItem1 = document.createElement('div');
            streedFoodPreviewItem1.classList.add('streed-food-preview-item');
            const streedFoodPreviewItem1Title = document.createElement('h3');
                streedFoodPreviewItem1Title.innerHTML='Chifla Chef';
                streedFoodPreviewItem1.appendChild(streedFoodPreviewItem1Title);    
            streedFoodPreview.appendChild(streedFoodPreviewItem1);
        const streedFoodPreviewItem2 = document.createElement('div');   
            streedFoodPreviewItem2.classList.add('streed-food-preview-item');
            const streedFoodPreviewItem2Title = document.createElement('h3');   
                streedFoodPreviewItem2Title.innerHTML='Shaorma';
                streedFoodPreviewItem2.appendChild(streedFoodPreviewItem2Title);    
            streedFoodPreview.appendChild(streedFoodPreviewItem2);  
        const streedFoodPreviewItem3 = document.createElement('div');   
            streedFoodPreviewItem3.classList.add('streed-food-preview-item');
            const streedFoodPreviewItem3Title = document.createElement('h3');   
                streedFoodPreviewItem3Title.innerHTML='Cârnat';
                streedFoodPreviewItem3.appendChild(streedFoodPreviewItem3Title);    
            streedFoodPreview.appendChild(streedFoodPreviewItem3);  
        return streedFoodPreview;
    }

    function showPreview(option){
        menuPreviewContent.innerHTML='';
        switch(option){
            case 'pizza': menuPreviewContent.appendChild(pizzaPreview());
            break;
            case 'burger': menuPreviewContent.appendChild(burgerPreview());
            break;
            case 'mexican': menuPreviewContent.appendChild(mexicanPreview());
            break;
            case 'streed food': menuPreviewContent.appendChild(streedFoodPreview());
            break;
        }
    }

    const menuPreview = document.createElement('div');
        menuPreview.classList.add('menu-preview');
    const menuPreviewTitle = document.createElement('h2');
        menuPreviewTitle.innerHTML='Meniul Teriff';
        menuPreview.appendChild(menuPreviewTitle);
    let previewOptions = [];
    let selectedPreviewOption = 'pizza';

    const menuPreviewParagraph = document.createElement('p');
        menuPreviewParagraph.classList.add('secondary');
        menuPreviewParagraph.innerHTML='pe gustul tău';
        menuPreview.appendChild(menuPreviewParagraph);

    const menuPreviewList = document.createElement('ul');
        menuPreviewList.classList.add('menu-preview-nav');
        const menuPreviewListItem1 = document.createElement('li');
            menuPreviewListItem1.innerHTML="pizza";
            previewOptions.push(menuPreviewListItem1);
            menuPreviewList.appendChild(menuPreviewListItem1);
        const menuPreviewListItem2 = document.createElement('li');
            menuPreviewListItem2.innerHTML="burger";
            previewOptions.push(menuPreviewListItem2);
            menuPreviewList.appendChild(menuPreviewListItem2);
        const menuPreviewListItem3 = document.createElement('li');
            menuPreviewListItem3.innerHTML="mexican";
            previewOptions.push(menuPreviewListItem3);
            menuPreviewList.appendChild(menuPreviewListItem3);
        const menuPreviewListItem4 = document.createElement('li');
            menuPreviewListItem4.innerHTML="streed food";
            previewOptions.push(menuPreviewListItem4);
            menuPreviewList.appendChild(menuPreviewListItem4);
    menuPreview.appendChild(menuPreviewList);

    const menuPreviewContent = document.createElement('div');
        menuPreviewContent.classList.add('menu-preview-content');
    menuPreview.appendChild(menuPreviewContent);
    showPreview(selectedPreviewOption);

    previewOptions.forEach(option => {
        option.addEventListener('click', function(){
            selectedPreviewOption = option.innerHTML;
            console.log(selectedPreviewOption);
            showPreview(selectedPreviewOption);
        });
    }); 

    return menuPreview;
} main.appendChild(menuPreviewComponent());

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
} main.appendChild(testimonialsComponent());

function contactComponent(){
    const contact = document.createElement('div');
        contact.classList.add('contact');
    const contactTitle = document.createElement('h2');
        contactTitle.innerHTML='Contactează-ne';
        contact.appendChild(contactTitle);
    const contactForm = document.createElement('form');
        contactForm.setAttribute('action', '#');
        contactForm.setAttribute('method', 'post');

    const formGroup1 = document.createElement('div');
        formGroup1.classList.add('form-group');
    const formGroup1Label = document.createElement('label');
        formGroup1Label.innerHTML='Nume';
        formGroup1Label.setAttribute('for','name');
        formGroup1.appendChild(formGroup1Label);
    const formGroup1Input = document.createElement('input');
        formGroup1Input.type='text';
        formGroup1Input.placeholder='Nume';
        formGroup1Input.id='name';
        formGroup1Input.name='name';
        formGroup1.appendChild(formGroup1Input);

    const formGroup2 = document.createElement('div');
        formGroup2.classList.add('form-group');
    const formGroup2Label = document.createElement('label');
        formGroup2Label.innerHTML='Email';
        formGroup2Label.setAttribute('for','email');
        formGroup2.appendChild(formGroup2Label);
    const formGroup2Input = document.createElement('input');
        formGroup2Input.type='email';
        formGroup2Input.placeholder='Email';
        formGroup2Input.id='email';
        formGroup2Input.name='email';
        formGroup2.appendChild(formGroup2Input);

    const formGroup3 = document.createElement('div');
        formGroup3.classList.add('form-group');
    const formGroup3Label = document.createElement('label');
        formGroup3Label.innerHTML='Mesaj';
        formGroup3Label.setAttribute('for','message');
        formGroup3.appendChild(formGroup3Label);
    const formGroup3Input = document.createElement('textarea');
        formGroup3Input.placeholder='Mesaj';
        formGroup3Input.id='message';
        formGroup3Input.name='message';
        formGroup3.appendChild(formGroup3Input);

    const formButton = document.createElement('button');
        formButton.innerHTML='Trimite';
        formButton.type='submit';

    contactForm.appendChild(formGroup1);
    contactForm.appendChild(formGroup2);
    contactForm.appendChild(formGroup3);
    contactForm.appendChild(formButton);
    contact.appendChild(contactForm);

    return contact;
} main.appendChild(contactComponent());

function footerComponent(){
    const footer = document.createElement('div');
        footer.id='footer';
    const socials = document.createElement('div');
        socials.classList.add('socials');
        const gitLink = document.createElement('a');
            gitLink.href='#';

        const gitSvg = document.createElement('img');
            gitSvg.src = './images/git.svg';
            gitSvg.alt = 'git';
            gitSvg.classList.add('social-icon');
            gitLink.appendChild(gitSvg);
        socials.appendChild(gitLink);
        
    const footerParagraph = document.createElement('p');
        footerParagraph.innerHTML='tupudipi 2022';

        footer.appendChild(socials);
        footer.appendChild(footerParagraph);

    return footer;
}   main.appendChild(footerComponent());