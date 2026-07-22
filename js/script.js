const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
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
