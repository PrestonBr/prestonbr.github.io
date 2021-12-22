const navSlide = ()=> {
    var isActive = false;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click',() => {
    
        // Toggle Nav
        nav.classList.toggle('nav-active');
        isActive = !isActive;
        if (isActive) {
            nav.classList.add('nav-close');
            isActive = !isActive;
        } else {
            nav.classList.remove('nav-close');
        }

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

    });

}

navSlide();