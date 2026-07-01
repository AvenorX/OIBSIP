// TYPED.JS ANIMATED TEXT 
if (typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
        strings: ['Web Designer', 'Frontend Developer', 'UI/UX Designer', 'Freelancer'],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });
}

// MOBILE MENU TOGGLE 
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

//  SCROLLSPY: HIGHLIGHT ACTIVE NAV LINK 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

function activateNavLink() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

//  HEADER SHADOW + SCROLL TOP BUTTON 
const header = document.querySelector('.header');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.4)';
        scrollTopBtn.classList.add('show');
    } else {
        header.style.boxShadow = 'none';
        scrollTopBtn.classList.remove('show');
    }
});

// SKILLS SECTION ANIMATION ON SCROLL 
const skillsSection = document.getElementById('skills-section');
let skillsAnimated = false;

function animateSkillsOnView() {
    if (skillsAnimated) return;
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        skillsAnimated = true;
        document.querySelectorAll('.progress-line span').forEach(bar => {
            bar.style.animationPlayState = 'running';
        });
    }
}

window.addEventListener('scroll', animateSkillsOnView);
window.addEventListener('load', animateSkillsOnView);

// contacts
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Thanks! Your message has been noted (demo form — connect a backend or service like Formspree to actually receive messages).';
    contactForm.reset();
});