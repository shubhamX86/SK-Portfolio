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

/* =================================
   DARK / LIGHT MODE
================================= */

const themeBtn =
    document.getElementById("themeBtn");


/* Check previously saved theme */

const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

} else {

    themeBtn.textContent = "☀️";

}


/* Toggle theme */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        /* LIGHT MODE */

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    } else {

        /* DARK MODE */

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

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