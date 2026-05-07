// Smooth Scroll (Only for hash links on the same page)
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Only prevent default if it's an internal section link
    if (href.startsWith("#") || (href.startsWith("index.html#"))) {
      e.preventDefault();
      
      // Extract the ID from the href
      const targetId = href.includes("#") ? href.split("#")[1] : href;
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
    // For regular page links (like about.html), let the default browser behavior happen
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


// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 250) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (current && link.getAttribute("href").includes("#" + current)) {
      link.classList.add("active");
    }
  });
});


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


// Apply fade-in to main elements
document.querySelectorAll(
  ".hero-text, .hero-img, .project-card, .about-content, .about-visual, " +
  ".service-left, .service-card, .contact-head, .contact-desc, .contact-links, " +
  "h2, h3, .section-label"
).forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});