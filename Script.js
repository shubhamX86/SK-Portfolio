/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* ===============================
   CLOSE MENU AFTER CLICK
================================ */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


/* ===============================
   ACTIVE NAVBAR
================================ */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   DARK / LIGHT MODE
================================ */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        themeBtn.textContent = "☾";

    } else {

        themeBtn.textContent = "☀";

    }

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        formMessage.textContent =
            `Thank you ${name}! Your message has been received.`;

        contactForm.reset();

    }
);


/* ===============================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();