// ===========================================
// ZETA Dashboard v3
// table.js
// ===========================================

let allProducts = [];

// ===========================================
// Построение таблицы
// ===========================================

function drawTable(products) {

    allProducts = [...products];

    renderTable();

    initTableFilters();

}

// ===========================================
// Отрисовка таблицы
// ===========================================

function renderTable() {

    const tbody = document.querySelector("#productTable tbody");

    tbody.innerHTML = "";

    const search =
        document.getElementById("searchInput")?.value
            .toLowerCase()
            .trim() || "";

    const abc =
        document.getElementById("abcFilter")?.value || "ALL";

    let filtered = [...allProducts];

    // -------------------------
    // Поиск
    // -------------------------

    if (search !== "") {

        filtered = filtered.filter(item =>

            (item.name || "")
                .toLowerCase()
                .includes(search)

            ||

            (item.sku || "")
                .toLowerCase()
                .includes(search)

        );

    }

    // -------------------------
    // ABC
    // -------------------------

    if (abc !== "ALL") {

        filtered = filtered.filter(item => item.abc === abc);

    }

    // -------------------------
    // Сортировка
    // -------------------------

    filtered.sort((a, b) => b.revenue - a.revenue);
    const counter = document.getElementById("tableCounter");

if (counter) {

    counter.textContent =
        `📦 Найдено товаров: ${filtered.length}`;

}

    // -------------------------
    // Таблица
    // -------------------------

    filtered.forEach((item, index) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td>${item.name}</td>

            <td>${Number(item.quantity).toLocaleString("ru-RU")}</td>

            <td>${Number(item.revenue).toLocaleString("ru-RU")} ₸</td>

            <td>${(item.share * 100).toFixed(2)} %</td>

            <td>${(item.cumulative * 100).toFixed(2)} %</td>

            <td>
                <span class="badge badge-${(item.abc || "").toLowerCase()}">
                    ${item.abc}
                </span>
            </td>

            <td>
                <span class="badge badge-${(item.xyz || "").toLowerCase()}">
                    ${item.xyz}
                </span>
            </td>

            <td>
                <span class="badge badge-${(item.category || "").toLowerCase()}">
                    ${item.category}
                </span>
            </td>

        `;

        tbody.appendChild(tr);

    });

    console.log("Отображено товаров:", filtered.length);

}

// ===========================================
// Инициализация фильтров
// ===========================================

let filtersInitialized = false;

function initTableFilters() {

    if (filtersInitialized) return;

    filtersInitialized = true;

    const searchInput = document.getElementById("searchInput");

    const abcFilter = document.getElementById("abcFilter");

    if (searchInput) {

        searchInput.addEventListener("input", renderTable);

    }

    if (abcFilter) {

        abcFilter.addEventListener("change", renderTable);

    }

}
