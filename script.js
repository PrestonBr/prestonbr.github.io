const navSlide = ()=> {
    var isActive = false;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    /* Toggle nav items */
    function toggleNav() {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        isActive = !isActive;
        if (isActive) {
            nav.classList.add('nav-close');
            isActive = !isActive;
        } else {
            nav.classList.remove('nav-close');
        }
    }

    /* Animate Nav items */
    function animateNav() {
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    }

    /* Toggle nav when burger menu clicked */
    burger.addEventListener('click',() => {

        toggleNav();
        animateNav();
    });

    /* Close burger menu when items are clicked */
    navLinks.forEach(link => {
        link.addEventListener('click',() => {
            toggleNav();
            animateNav();
        });

        /* For mobile devices */
        link.addEventListener('touchend',() => {
            toggleNav();
            animateNav();
        })
    });

}

/* Remove hover code when things are clicked */
function removeHover(element) {
    element.classList.remove(`${element}:hover`);
}

const clickRemovevHighlight = () => {
    const emailLink = document.querySelector('.email-text');
    const linkedInLogo = document.querySelector('.sm-image');
    const navLinks = document.querySelectorAll('.nav-links li');

    emailLink.addEventListener('click',removeHover(emailLink));
    linkedInLogo.addEventListener('click',removeHover(linkedInLogo));
    navLinks.forEach(link => {
        link.addEventListener('click',removeHover(link));
    });

    /* For mobile devices */
    emailLink.addEventListener('touchend',removeHover(emailLink));
    linkedInLogo.addEventListener('touchend',removeHover(linkedInLogo));
    navLinks.forEach(link => {
        link.addEventListener('touchend',removeHover(link));
    });
}

/* Main app functions*/
const app = () => {
    navSlide();
    clickRemovevHighlight();
}

app();


/* Code from https://css-tricks.com/stop-animations-during-window-resizing/ */
// let resizeTimer;
// window.addEventListener("resize", () => {
//     nav.classList.add("resize-animation-stopper");
//     navLinks.classList.add("resize-animation-stopper");
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         nav.classList.remove("resize-animation-stopper");
//         navLinks.classList.remove("resize-animation-stopper");
//     }, 400);
// });