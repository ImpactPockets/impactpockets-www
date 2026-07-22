document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const menu = document.querySelector("#navbar-menu");

    toggleButton.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";

        this.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("active");
    });
});

