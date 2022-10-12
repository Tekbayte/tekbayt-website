window.addEventListener('DOMContentLoaded', () => {
    // declare variables
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const hamburgerMenuIcon = document.querySelector('#menu-icon');
    const mobileNavbar = document.querySelector('.navbar-mobile');
    const ourWorks = document.getElementById('our-works');
    const contactUs= document.getElementById('contact-us');
    const home= document.getElementById('home');
    const services= document.getElementById('services');
    const about= document.getElementById('about');
    const date = document.querySelector('#date');

    // adding current year to the footer
    date.innerHTML = new Date().getFullYear();

    // adding event listeners
    hamburgerMenu.addEventListener('click', () => {
        ['bi-list', 'bi-x-lg'].map(menu => {
            hamburgerMenuIcon.classList.toggle(menu);
        });

        if(hamburgerMenuIcon.classList.contains('bi-x-lg')){
            mobileNavbar.style.transform = 'translateY(0)';
            mobileNavbar.style.transition = 'transform 1s ease-in-out';
            contentPushDown();
        }else{
            mobileNavbar.style.transform = 'translateY(-100vh)';
            mobileNavbar.style.transition = 'transform 1s ease-in-out';
            contentPushUp();
        }
    });

    
    // script to push content down or up depending on the direction of navbar
    // get website current pathname
    const { pathname } = document.location;

    const contentPushDown = () => {
        switch(pathname){
            case '/contact-us.html': 
                navbarPushContentDown(contactUs);
                break;
            case '/our-work.html':
                navbarPushContentDown(ourWorks);
                break;
            case '/index.html':
                navbarPushContentDown(home);
                break;
            case '/services.html':
                navbarPushContentDown(services);
                break;
            default:
                navbarPushContentDown(about);
        }
    }

    const contentPushUp = () => {
        switch(pathname){
            case '/contact-us.html': 
                navbarPushContentUp(contactUs);
                break;
            case '/our-work.html':
                navbarPushContentUp(ourWorks);
                break;
            case '/index.html':
                navbarPushContentUp(home);
                break;
            case '/services.html':
                navbarPushContentUp(services);
                break;
            default:
                navbarPushContentUp(about);
        }
    }


    const navbarPushContentDown = (sectionOne) => {
        if(pathname == '/services.html'){
            sectionOne.style.margin = '30em 0 0 0';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }else{
            sectionOne.style.margin = '30rem 2rem';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }
    }

    const navbarPushContentUp = (sectionOne) => {
        if(pathname == '/services.html'){
            sectionOne.style.margin = '12em 0 0 0';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }else{
            sectionOne.style.margin = '10rem 2rem';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }
    }
})
