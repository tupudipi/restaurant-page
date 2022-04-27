export default function homePage(){
    const home = document.createElement('div');
    home.id = 'home';
    function heroComponent() {
        const hero = document.createElement('div');
        hero.classList.add('hero');
        const heroTitle = document.createElement('h1');
        heroTitle.innerHTML = 'Restaurant Teriff';
        hero.appendChild(heroTitle);
        const heroSubtitle = document.createElement('h3');
        heroSubtitle.innerHTML = 'Niciun fel de legătură cu Sheriff';
        hero.appendChild(heroSubtitle);
        const heroParagraph = document.createElement('p');
        heroParagraph.innerHTML = 'Servim cu drag în:';
        hero.appendChild(heroParagraph);
        const heroList = document.createElement('ul');
        heroList.id = 'locations';
    
        const heroListItem1 = document.createElement('li');
        const heroListItem1Para1 = document.createElement('p');
        heroListItem1Para1.classList.add('place');
        heroListItem1Para1.innerHTML = 'Târgoviște';
        heroListItem1.appendChild(heroListItem1Para1);
        const heroListItem1Para2 = document.createElement('p');
        heroListItem1Para2.classList.add('addr');
        heroListItem1Para2.innerHTML = 'Aleea Sinaia, nr. 3 (peste drum de Sheriff)';
        heroListItem1.appendChild(heroListItem1Para2);
        const heroListItem1Para3 = document.createElement('p');
        heroListItem1Para3.classList.add('addr');
        heroListItem1Para3.innerHTML = 'micro 4, Piața Aurora';
        heroListItem1.appendChild(heroListItem1Para3);
        heroList.appendChild(heroListItem1);
    
        const heroListItem2 = document.createElement('li');
        const heroListItem2Para1 = document.createElement('p');
        heroListItem2Para1.classList.add('place');
        heroListItem2Para1.innerHTML = 'Aninoasa';
        heroListItem2.appendChild(heroListItem2Para1);
        const heroListItem2Para2 = document.createElement('p');
        heroListItem2Para2.classList.add('addr');
        heroListItem2Para2.innerHTML = 'Strada Ungaria, nr. 1';
        heroListItem2.appendChild(heroListItem2Para2);
        heroList.appendChild(heroListItem2);
    
        hero.appendChild(heroList);
        return hero;
    } 
    
    function testimonialsComponent() {
        const testimonials = document.createElement('div');
        testimonials.classList.add('testimonials');
        const testimonialsTitle = document.createElement('h2');
        testimonialsTitle.innerHTML = 'Ce spun clienții noștri';
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
        testimonial2Author.innerHTML = "Jane Doe";
        testimonial2.appendChild(testimonial2Text);
        testimonial2.appendChild(testimonial2Author);
    
        testimonials.appendChild(testimonial1);
        testimonials.appendChild(testimonial2);
    
        return testimonials;
    } 

    function storyComponent() {
        const story = document.createElement('div');
            story.classList.add('story');
        const storyTitle = document.createElement('h2');
            storyTitle.innerHTML = 'Povestea Teriff';
            story.appendChild(storyTitle);
        const storyParagraph1 = document.createElement('p');
            storyParagraph1.classList.add('secondary');
            storyParagraph1.innerHTML = 'lorem ipsum dolor sit amet';
            story.appendChild(storyParagraph1);
        const storyParagraph2 = document.createElement('p');
            storyParagraph2.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nam qui dicta architecto eligendi.
                Possimus molestias sapiente cumque vel non nihil corporis, est asperiores. Dolorem, obcaecati quos!
                Eaque, modi blanditiis!
                Repellat, ipsum omnis molestias repellendus iusto fugit fuga adipisci iste ratione? Dicta voluptatum
                mollitia enim voluptas, maiores commodi maxime similique quae, in praesentium molestiae aliquam ipsa
                quaerat fuga perspiciatis. Corporis?`;
        story.appendChild(storyParagraph2);
        return story;
    } 

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
    } 

    home.appendChild(heroComponent());
    home.appendChild(storyComponent());
    home.appendChild(flagshipsComponent());
    home.appendChild(testimonialsComponent());
    return home;
}
