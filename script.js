"use strict";

const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}
