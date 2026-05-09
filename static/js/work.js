// Smooth Scroll
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Active link highlighting removed because this is a multi-page site, not a single-page scrolling site.


// Intersection Observer Fade-in Effect
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);


// Apply fade-in to main elements
document.querySelectorAll(
    ".hero-text, .hero-img, .project-card, .about, .services, .contact, h2, h3, .service-card"
).forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});