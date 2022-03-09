function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    const navbarToggler = document.querySelector(".main-header .navbar-toggle-wrapper");

    navbarToggler.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("nav-open")
    })
})