/* ===============================
   THEME TOGGLE (DARK / LIGHT)
================================ */
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
html.classList.add(savedTheme);

// Toggle theme on click
themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const theme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});

/* ===============================
   MOBILE MENU TOGGLE
================================ */
const menuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
