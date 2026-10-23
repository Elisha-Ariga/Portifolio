const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("show");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navMenu.addEventListener("click", function (event) {
    if (event.target instanceof HTMLAnchorElement) {
        navMenu.classList.remove("show");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    themeButton.textContent = isDarkMode ? "☀️" : "🌙";
    themeButton.setAttribute("aria-pressed", String(isDarkMode));
    themeButton.setAttribute("aria-label", isDarkMode ? "Switch to light theme" : "Switch to dark theme");
});

const heroSection = document.querySelector("#home");
const heroObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        heroSection.classList.toggle("highlight-active", entry.isIntersecting);
    });
}, { threshold: 0.4 });

heroObserver.observe(heroSection);
