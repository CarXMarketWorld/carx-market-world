const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loadAccounts() {

    const container = document.getElementById("accounts-list");
    container.innerHTML = "<p>Yükleniyor...</p>";

    const { data, error } = await supabase
        .from("accounts")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        container.innerHTML = "<p>Hata: " + error.message + "</p>";
        return;
    }

    if (!data || data.length === 0) {
        container.innerHTML = "<p>Henüz hesap eklenmemiş.</p>";
        return;
    }

    container.innerHTML = "";

    data.forEach(account => {

        container.innerHTML += `
        <div class="card">

            <img src="${account.image}" alt="${account.title}">

            <h3>${account.title}</h3>

            <p>🚗 Araç: ${account.cars}</p>
            <p>💰 Para: ${account.money}</p>
            <p>⭐ Seviye: ${account.level}</p>
            <p>💵 Fiyat: ${account.price}</p>

            <a href="${account.telegram}" target="_blank">
                Telegram'dan İletişime Geç
            </a>

        </div>
        `;

    });

}

loadAccounts();
