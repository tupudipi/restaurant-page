export default function aboutPage() {
    const about = document.createElement('div');
    function storyComponent() {
        const story = document.createElement('div');
            story.classList.add('story');
        const storyTitle = document.createElement('h2');
            storyTitle.innerHTML = 'Povestea Teriff';
            story.appendChild(storyTitle);
        const storyParagraph1 = document.createElement('p');
            storyParagraph1.classList.add('secondary');
            storyParagraph1.innerHTML = 'lorem ipsum dolor sit';
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
    } about.appendChild(storyComponent());

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
    } about.appendChild(flagshipsComponent());
    return about;
}   