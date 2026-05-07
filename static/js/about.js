// ========================= //
// 1. SMOOTH SCROLL (anchor links only)
// ========================= //
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


// ========================= //
// 2. NAVBAR SCROLL EFFECT
// ========================= //
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ========================= //
// 3. ACTIVE LINK HIGHLIGHTING
// ========================= //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (current && href.includes('#' + current)) {
            link.classList.add('active');
        }
        // Mark About as active always on this page
        if (href.includes('about.html')) {
            link.classList.add('active');
        }
    });
});


// ========================= //
// 4. FADE-IN INTERSECTION OBSERVER
// ========================= //
const observerOptions = { threshold: 0.12 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Apply fade-in to all main sections
document.querySelectorAll(
    '.about-right, .about-image, .skills-grid, .exp-card, ' +
    '.skill-card, .tool-card, .contact, h2, h3'
).forEach(el => {
    el.classList.add('fade');
    observer.observe(el);
});


// ========================= //
// 5. CONTINUOUS PILL FLOAT
// (CSS handles animation — this just ensures pills are visible on load)
// ========================= //
document.querySelectorAll('.about-pill').forEach((pill, i) => {
    pill.style.animationDelay = (i * 0.3) + 's';
});