// Intersection Observer Fade-in Effect
const observerOptions = {
    threshold: 0.12
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

// Apply fade-in to elements
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(
        ".contact-left h2, .contact-left p, .contact-circle"
    ).forEach(el => {
        el.classList.add("fade");
        observer.observe(el);
    });
});

// Skill Strip animation logic (optional if purely CSS)
// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
