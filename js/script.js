const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
