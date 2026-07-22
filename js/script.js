alert("script.js çalıştı");
const supabaseUrl = "https://zyznqwyveslkxjxpzhpi.supabase.co";
const supabaseKey = "sb_publishable_jlj-NyBWyFkseo57_TtVxA_WRVFO2RK";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loadAccounts() {

  const { data, error } = await supabase
    .from("accounts")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById("accounts-list");
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
        <a href="${account.telegram}" target="_blank">Telegram</a>
      </div>
    `;
  });
}

loadAccounts();
