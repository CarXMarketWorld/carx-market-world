const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});
