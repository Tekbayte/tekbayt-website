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

    if(pathname == '/contact-us.html'){
        // Sending contact form details through EmailJs
        const contactUsForm = document.getElementById('contact-us');
        const formElement = document.querySelector('form');
        const inputs = document.querySelectorAll('input, select, textarea');
        const popUp = document.getElementById('pop-up');
        // const resetBtn = document.getElementsByClassName('reset-button');

        // Adding event listeners and collecting data
        inputs.forEach(input => {
            input.addEventListener('invalid', () => {
                input.classList.add('invalid');
            }, false)
        })

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if(input.checkValidity()){
                    input.classList.add('valid');
                }
            }, false)
        })

        // get current scroll height of window
        window.addEventListener('scroll', () => {
                popUp.style.top = `${scrollY + 250}px`;
            });


        contactUsForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // change popUp position
            popUp.style.left = '50%';

            // Sending contact details through EmailJs
            emailjs.sendForm('gmail', 'contact_us_tekbayt', formElement)
            .then(function(response) {
                if(response.status == 200){ 
                    
                    const hidePopUp = setTimeout(() => {
                        // Show pop up message
                        popUp.style.opacity = 1;
                        popUp.innerHTML = `
                        <h3>Submitted Successfully!!</h3>
                        <p>You will receive an email shortly ...</p>
                        <p>Click RESET to reset the form</p>
                        `;
                    }, 0);
                    

                    // Hide pop up after 3 seconds
                    setTimeout(() => {
                        clearTimeout(hidePopUp);
                        popUp.style.top = '-100rem';
                        popUp.style.opacity = 0;
                        popUp.style.transition = 'top 1s ease-in-out';
                    }, 4000);
                }
            }, 
            function(error) {
                if(error){
                    // Show pop up message
                    const hidePopUp = setTimeout(() => {
                        popUp.style.opacity = 1;
                        popUp.innerHTML = `
                        <h3>Error !!</h3>
                        <p>Please try again later</p>
                        `
                    }, 0);
                    
                    // Hide pop up after 3 seconds
                    setTimeout(() => {
                        clearTimeout(hidePopUp);
                        popUp.style.top = '-100rem';
                        popUp.style.opacity = 0;
                        popUp.style.transition = 'top 1s ease-in-out';
                    }, 4000);
                }
            });
        })
    }
})
