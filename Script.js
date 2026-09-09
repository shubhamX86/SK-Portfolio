/* =====================================================
   SELECT ELEMENTS
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

const themeBtn = document.getElementById("themeBtn");

const navLinks =
    document.querySelectorAll(".navbar a");

const sections =
    document.querySelectorAll("section");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");


    if (navbar.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;


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


/* =====================================================
   DARK / LIGHT MODE
===================================================== */


/* Get saved theme */

const savedTheme =
    localStorage.getItem("portfolioTheme");


/* Apply saved theme */

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

} else {

    document.body.classList.remove("light");

    themeBtn.textContent = "☀️";

}


/* Toggle Theme */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const lightMode =
        document.body.classList.contains("light");


    if (lightMode) {

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


/* =====================================================
   CONTACT FORM
===================================================== */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            if (name === "") {

                formMessage.textContent =
                    "Please enter your name.";

                return;

            }


            formMessage.textContent =
                `Thank you ${name}! Your message has been received.`;


            contactForm.reset();

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}