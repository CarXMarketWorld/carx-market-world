const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";
window.db = window.supabase.createClient(supabaseUrl, supabaseKey);

async function addAccount() {
alert("Buton çalıştı");
    const title = document.getElementById("title").value;
    const cars = document.getElementById("cars").value;
    const money = document.getElementById("money").value;
    const level = document.getElementById("level").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const telegram = document.getElementById("telegram").value;

    const { error } = await window.db
        .from("accounts")
        .insert([
            {
                title,
                cars,
                money,
                level,
                price,
                image,
                telegram
            }
        ]);

    if (error) {
    console.log(error);
    alert(error.message);
} else {
    alert("Hesap başarıyla eklendi.");
    }
}
