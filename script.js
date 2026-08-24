// ============================================
// MENU MOBILE
// ============================================

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


// ============================================
// CLOSE MOBILE MENU
// وقتی روی لینک‌های منو کلیک کنیم
// ============================================

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


// ============================================
// GALLERY MODAL
// ============================================

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


// وقتی روی عکس کلیک کنیم

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        imageModal.classList.add("active");

    });

});


// بستن عکس

closeModal.addEventListener("click", function () {

    imageModal.classList.remove("active");

});


// اگر بیرون عکس کلیک کنیم

imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


// ============================================
// ESC برای بستن عکس
// ============================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        imageModal.classList.remove("active");

    }

});


// ============================================
// SCROLL ANIMATION
// ============================================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .about-grid, .gallery-item"
    );


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


// ============================================
// HEADER SHADOW
// ============================================

const header =
    document.getElementById("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});