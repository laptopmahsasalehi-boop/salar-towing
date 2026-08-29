document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) return;

    // باز و بسته شدن منو
    menuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });


    // بستن منو بعد از انتخاب هر گزینه
    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

        });

    });

});