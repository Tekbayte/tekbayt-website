window.addEventListener('DOMContentLoaded', () => {
    // declare section variables
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const hamburgerMenuIcon = document.querySelector('#menu-icon');
    const mobileNavbar = document.querySelector('.navbar-mobile');
    const ourWorks = document.getElementById('our-works');
    const contactUs= document.getElementById('contact-us');
    const home= document.getElementById('home');
    const services= document.getElementById('services');
    const about= document.getElementById('about');
    const date = document.querySelector('#date');

    // declaring form  variables
    const contactUsContainer = document.getElementById('contact-us-container');
    const contactUsForm = document.getElementById('contact-us');
    const formElement = document.querySelector('form');
    const inputs = document.querySelectorAll('input, select, textarea');
    const successMessage = document.getElementById('success-message');
    const successMessageButton = document.querySelector('.success-message-button');
    const resetButton = document.querySelector('.reset-button');

    // getting and adding current year to the footer
    date.innerHTML = new Date().getFullYear();

    // adding event listener to hamburger menu
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

    // getting the current location on the website
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

    // getting the current location on the website
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

    // function to push main section down when navbar is shown
    const navbarPushContentDown = (sectionOne) => {
        if(pathname == '/services.html'){
            sectionOne.style.margin = '30em 0 0 0';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }else{
            sectionOne.style.margin = '30rem 2rem';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }
    }

    // function to push main section up when navbar is hidden
    const navbarPushContentUp = (sectionOne) => {
        if(pathname == '/services.html'){
            sectionOne.style.margin = '12em 0 0 0';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }else{
            sectionOne.style.margin = '10rem 2rem';
            sectionOne.style.transition = 'margin 1s ease-in-out';
        }
    }


    // work on form submission if website location is contact us
    if(pathname == '/contact-us.html'){

        // checking for invalid error during form submission
        inputs.forEach(input => {
            input.addEventListener('invalid', () => {
                input.classList.add('invalid');
            }, false)
        })

        // checking for valid form data when not in focus
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if(input.checkValidity()){
                    input.classList.add('valid');
                }
            }, false)
        })

        // reseting the data entered
        resetButton.addEventListener('click', () =>{
            inputs.forEach(input => {
                input.classList.remove('invalid');
                input.classList.remove('valid');
            })
        })


        // adding submit event and submitting user data
        contactUsForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Sending contact details through EmailJs
            emailjs.sendForm('gmail', 'contact_us_tekbayt', formElement)
            .then(function(response) {
                if(response.status == 200){ 
                    // display success message here
                    contactUsContainer.style.animation = 'fadeOut 1s ease-in-out normal';

                    // Reseting the form after submission
                    inputs.forEach(input => {
                        input.value = '';
                    });

                    // adding fade out and fade in animation after form submission
                    contactUsContainer.addEventListener('animationend', () => {
                        contactUsContainer.style.display = 'none';
                        successMessage.style.display = 'block';
                        successMessage.style.marginTop = '15rem';
                        successMessage.style.animation = 'fadeIn 1s ease-in-out normal';
                        
                        successMessage.addEventListener('animationend', () => {
                            contactUsContainer.style.animation = 'none';
                        })
                    });
                }
            }, 
            function(error) {
                if(error){
                    // display error message here
                    alert('Sorry, an error has occured. Please try again later');
                }
            });
        })

        // displaying contact form again and hiding success message
        successMessageButton.addEventListener('click', () => {
                successMessage.style.animation = 'fadeOut 1s ease-in-out normal';

                successMessage.addEventListener('animationend', () => {
                successMessage.style.display = 'none';
                contactUsContainer.style.animation = 'fadeIn 1s ease-in-out normal';

                window.location = '/contact-us.html';
                contactUsContainer.style.display = 'block';

                contactUsContainer.addEventListener('animationend', () => {
                    successMessage.style.animation = 'none';
                })
            });
        })
    }
})
