alert("Script başladı");

const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loadAccounts() {
    try {
        const { data, error } = await supabase
            .from("accounts")
            .select("*");

        if (error) {
            alert("Supabase Hatası: " + error.message);
            return;
        }

        alert("Bulunan hesap: " + data.length);

        const container = document.getElementById("accounts-list");

        data.forEach(account => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${account.title}</h3>
                <p>Araç: ${account.cars}</p>
                <p>Para: ${account.money}</p>
                <p>Seviye: ${account.level}</p>
                <p>Fiyat: ${account.price}</p>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        alert("JS Hatası: " + e.message);
    }
}

loadAccounts();
