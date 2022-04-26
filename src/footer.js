export default function footerComponent(){
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
}   