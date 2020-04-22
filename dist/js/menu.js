(function () {
    const menuButton = document.querySelector(".menu-button");
    menuButton.onclick = function () {
        document.body.classList.toggle("no-scroll");
        const menu = document.getElementById("menu");
        menu.classList.toggle("nav-list-visible");
        menuButton.classList.toggle("menu-button-active");
    }
})();
