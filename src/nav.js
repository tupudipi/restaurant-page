export default function nav(){
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
    navLink1Link.classList.add('nav-link');
    navLink1.appendChild(navLink1Link);
    navLinks.appendChild(navLink1);
    const navLink2 = document.createElement('li');
    const navLink2Link = document.createElement('a');
    navLink2Link.href='#';
    navLink2Link.innerHTML='Menu';
    navLink2Link.classList.add('nav-link');
    navLink2.appendChild(navLink2Link);
    navLinks.appendChild(navLink2);
    const navLink3 = document.createElement('li');
    const navLink3Link = document.createElement('a');
    navLink3Link.href='#';
    navLink3Link.innerHTML='Contact';
    navLink3Link.classList.add('nav-link');
    navLink3.appendChild(navLink3Link);
    navLinks.appendChild(navLink3);

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
}   
