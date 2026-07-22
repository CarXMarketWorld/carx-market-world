const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function addAccount() {

    const title = document.getElementById("title").value;
    const cars = document.getElementById("cars").value;
    const money = document.getElementById("money").value;
    const level = document.getElementById("level").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const telegram = document.getElementById("telegram").value;

    const { error } = await supabase
        .from("accounts")
        .insert([{
            title,
            cars,
            money,
            level,
            price,
            image,
            telegram
        }]);

    if (error) {
        alert(error.message);
        return;
    }

    alert("Hesap başarıyla eklendi.");

    document.getElementById("title").value = "";
    document.getElementById("cars").value = "";
    document.getElementById("money").value = "";
    document.getElementById("level").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("telegram").value = "";
}
