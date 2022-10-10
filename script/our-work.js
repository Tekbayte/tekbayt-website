window.addEventListener('DOMContentLoaded', () => {
    // declare variables
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const hamburgerMenuIcon = document.querySelector('#menu-icon');
    const mobileNavbar = document.querySelector('.navbar-mobile');
    const ourWorks = document.getElementById('our-works');
    const contactUs= document.getElementById('contact-us');
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
            case '/our-work.html':
                navbarPushContentDown(ourWorks);
            default:
                navbarPushContentDown(null);
        }
    }

    const contentPushUp = () => {
        switch(pathname){
            case '/contact-us.html': 
                navbarPushContentUp(contactUs);
            case '/our-work.html':
                navbarPushContentUp(ourWorks);
            default:
                navbarPushContentUp(null);
        }
    }


    const navbarPushContentDown = (sectionOne) => {
        sectionOne.style.margin = '30rem 2rem';
        sectionOne.style.transition = 'margin 1s ease-in-out';
    }

    const navbarPushContentUp = (sectionOne) => {
        sectionOne.style.margin = '10rem 2rem';
        sectionOne.style.transition = 'margin 1s ease-in-out';
    }
})
