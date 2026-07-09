// Смяна на цвета на менюто при скрол

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// Плавно появяване на секциите
// ===============================

const sections = document.querySelectorAll(".section, .gallery, .cta");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Лек паралакс на hero изображението
// ===============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const y = window.scrollY * 0.35;

    hero.style.backgroundPosition = `center calc(50% + ${y}px)`;

});



// ===============================
// Scroll paralax windowed 
// ===============================
const parallaxImages = document.querySelectorAll(".parallax-img");

function updateParallax() {

    const windowCenter = window.innerHeight / 2;

    parallaxImages.forEach(img => {

        const rect = img.parentElement.getBoundingClientRect();

        const imageCenter = rect.top + rect.height / 2;

        const distance = imageCenter - windowCenter;

        const speed = 0.25;   // пробвай 0.15 - 0.35

        img.style.transform =
            `translateY(${-distance * speed}px)`;

    });

}

window.addEventListener("scroll", updateParallax);
window.addEventListener("resize", updateParallax);

updateParallax();