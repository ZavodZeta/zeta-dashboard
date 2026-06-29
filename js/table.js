// ===========================================
// ZETA Dashboard
// table.js
// Таблица ТОП товаров
// ===========================================

function drawTable(products) {

    const table = document.querySelector("#productsTable tbody");

    if (!table) return;

    table.innerHTML = "";

    const sortedProducts = [...products].sort((a, b) => {

        return getNumber(b["Выручка"]) - getNumber(a["Выручка"]);

    });

    sortedProducts.slice(0, 20).forEach((item, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${getText(item["Наименование"])}</td>

            <td>${getNumber(item["Выручка"]).toLocaleString("ru-RU")} ₸</td>

            <td>${getText(item["ABC"])}</td>

            <td>${getText(item["XYZ"])}</td>

        `;

        table.appendChild(row);

    });

    console.log("ТОП товаров сформирован.");

}
