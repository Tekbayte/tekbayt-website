// declare variables
const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerMenuIcon = document.querySelector('#menu-icon');
const mobileNavbar = document.querySelector('.navbar-mobile');
const ourWorks = document.querySelector('#our-works');
const contactUs= document.querySelector('#contact-us');
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
        [ourWorks, contactUs].map(sectionToGiveMargin => {
            sectionToGiveMargin.style.margin = '30rem 2rem';
            sectionToGiveMargin.style.transition = 'margin 1s ease-in-out'
        })
    }else{
        mobileNavbar.style.transform = 'translateY(-100vh)';
        mobileNavbar.style.transition = 'transform 1s ease-in-out';
        [ourWorks, contactUs].map(sectionToGiveMargin => {
            sectionToGiveMargin.style.margin = '10rem 2rem';
            sectionToGiveMargin.style.transition = 'margin 1s ease-in-out'
        })
    }
});