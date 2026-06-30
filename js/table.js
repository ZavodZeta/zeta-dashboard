// ===========================================
// ZETA Dashboard v3
// table.js
// ===========================================

function drawTable(products) {

    const tbody = document.querySelector("#productTable tbody");

    tbody.innerHTML = "";

    // Сортировка по выручке
    products.sort((a, b) => b.revenue - a.revenue);

    products.forEach((item, index) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td>${item.name}</td>

            <td>${Number(item.quantity).toLocaleString("ru-RU")}</td>

            <td>${Number(item.revenue).toLocaleString("ru-RU")} ₸</td>

            <td>${(item.share * 100).toFixed(2)} %</td>

            <td>${(item.cumulative * 100).toFixed(2)} %</td>

            <td>
                <span class="badge badge-${item.abc}">
                    ${item.abc}
                </span>
            </td>

            <td>
                <span class="badge badge-${item.xyz}">
                    ${item.xyz}
                </span>
            </td>

            <td>
                <span class="badge badge-${item.category}">
                    ${item.category}
                </span>
            </td>

        `;

        tbody.appendChild(tr);

    });

    console.log("Таблица товаров построена.");

}
