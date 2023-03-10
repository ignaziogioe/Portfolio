/*--------------------------------------------------------------------------Hamburger---*/

$(document).ready(function () {
    $(".container-hamburger, .hamburger span").on("click", function () {
        $(this).toggleClass("hamburger-active");
        $(".navMenu").toggleClass("navMenu-active");
    });

    $(document).on("click", function (event) {
        if (!$(event.target).closest(".container-hamburger, .hamburger span").length && !$(event.target).closest(".navMenu").length && $(".container-hamburger, .hamburger span").hasClass("hamburger-active")) {
            $(".container-hamburger, .hamburger span").removeClass("hamburger-active");
            $(".navMenu").removeClass("navMenu-active");
        }
    });
});

/*--------------------------------------------------------------------------End-Hamburger---*/

/*--------------------------------------------------------------------------Menu---*/

$(document).ready(function () {
    $(".container-hamburger, .hamburger span").on("click", function () {
        $(".NavMenu").toggleClass("navMenu-active");
        $("body").toggleClass("overflow");
    });

    $(".NavMenu").on("click", function () {
        $(".NavMenu").removeClass("navMenu-active");
        $("body").removeClass("overflow");
    });
});

/*--------------------------------------------------------------------------End-Menu---*/

/*--------------------------------------------------------------------------Header-Text---*/

let typingEffect = new Typed(".multiText", {
    strings: ["developer", "designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500
})

/*--------------------------------------------------------------------------End-Header-Text---*/

/*---------------------------------------------------------------------------Cursor-Effect---*/

let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {

    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate( calc(${x}px - 50%),calc(${y}px - 50%) )`;
    cursor.style.transform = `translate( calc(${x}px - 50%),calc(${y}px - 50%) )`;

})

links.forEach((link) => {
    link.addEventListener("mouseover", function () {
        outline.classList.add("hover");
        cursor.classList.add("hover");
    });
    link.addEventListener("mouseleave", function () {
        outline.classList.remove("hover");
        cursor.classList.remove("hover");
    });
});
/*--------------------------------------------------------------------------End-Cursor-Effect---*/

/*---------------------------------------------------------------------------Scroll-Smooth---*/

$('a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
})

/*--------------------------------------------------------------------------End-Scroll-Smooth---*/

/*---------------------------------------------------------------------------NavMenu-Autoclose---*/

const hamburger = document.querySelector(".input-hamburger");
const navMenu = document.querySelector(".navMenu");
const menuLinks = document.querySelectorAll(".navMenu a");
const hamburgerContainer = document.querySelector(".container-hamburger, .hamburger span");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("navMenu-active");
});

navMenu.addEventListener("click", function () {
    navMenu.classList.remove("navMenu-active");
    hamburgerContainer.classList.remove("hamburger-active");
});

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const sectionId = this.getAttribute("href");
        navMenu.classList.remove("navMenu-active");
        hamburgerContainer.classList.remove("hamburger-active");
        window.scrollTo({
            top: document.querySelector(sectionId).offsetTop,
            behavior: "smooth"
        });
    });
});

document.addEventListener("click", function (event) {
    if (event.target !== hamburger && event.target.parentNode !== navMenu) {
        navMenu.classList.remove("navMenu-active");
        hamburgerContainer.classList.remove("hamburger-active");
    }
});


/*--------------------------------------------------------------------------End-NavMenu-Autoclose---*/

/*---------------------------------------------------------------------------Time-Modular---*/

const startDate = new Date(2022, 4, 13);
const currentDate = new Date();
const difference = currentDate - startDate;
const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
const years = Math.floor(months / 12);

let result;
if (years > 0) {
    result = `${years} ${years > 1 ? "years" : "year"} and ${months % 12} months`;
} else {
    result = `${months} months`;
}

document.querySelector(".date").innerHTML = result;


// La data del compleanno
const birthday = new Date(1993, 0, 28);

// La data attuale
const currentDate2 = new Date();

// Calcola la differenza in millisecondi
const difference2 = currentDate2 - birthday;

// Calcola la differenza in anni
const years2 = Math.floor(difference2 / (1000 * 60 * 60 * 24 * 365.25));

// Mostra la differenza su schermo
const birthdaySpan = document.querySelector('.birthday');
birthdaySpan.innerHTML = years2 + " years";

/*--------------------------------------------------------------------------End-Time-Modular---*/