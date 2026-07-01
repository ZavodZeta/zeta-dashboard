// ===========================================
// ZETA Dashboard v4
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

    const xyz =
        document.getElementById("xyzFilter")?.value || "ALL";

    const matrix =
        document.getElementById("matrixFilter")?.value || "ALL";

    let filtered = [...allProducts];

    // ======================================
    // Поиск
    // ======================================

    if (search !== "") {

        filtered = filtered.filter(item =>

            (item.name || "").toLowerCase().includes(search)

            ||

            (item.sku || "").toLowerCase().includes(search)

        );

    }

    // ======================================
    // ABC
    // ======================================

    if (abc !== "ALL") {

        filtered = filtered.filter(item => item.abc === abc);

    }

    // ======================================
    // XYZ
    // ======================================

    if (xyz !== "ALL") {

        filtered = filtered.filter(item => item.xyz === xyz);

    }

    // ======================================
    // Матрица
    // ======================================

    if (matrix !== "ALL") {

        filtered = filtered.filter(item => item.category === matrix);

    }

    // ======================================
    // Сортировка
    // ======================================

    filtered.sort((a, b) => b.revenue - a.revenue);

    // ======================================
    // Счетчик
    // ======================================

    const counter = document.getElementById("tableCounter");

    if (counter) {

        counter.textContent =
            `📦 Найдено товаров: ${filtered.length} из ${allProducts.length}`;

    }

    // ======================================
    // Таблица
    // ======================================

    filtered.forEach((item, index) => {

        const tr = document.createElement("tr");

        tr.classList.add("row-" + (item.abc || "").toLowerCase());

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td>${item.sku}</td>

            <td>${item.name}</td>

            <td>${Number(item.quantity || 0).toLocaleString("ru-RU")}</td>

            <td>${Number(item.revenue || 0).toLocaleString("ru-RU")} ₸</td>

            <td>${(item.share * 100).toFixed(2)}%</td>

            <td>${(item.cumulative * 100).toFixed(2)}%</td>

            <td>${(item.cv * 100).toFixed(1)}%</td>

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
// Фильтры
// ===========================================

let filtersInitialized = false;

function initTableFilters() {

    if (filtersInitialized) return;

    filtersInitialized = true;

    document.getElementById("searchInput")
        ?.addEventListener("input", renderTable);

    document.getElementById("abcFilter")
        ?.addEventListener("change", renderTable);

    document.getElementById("xyzFilter")
        ?.addEventListener("change", renderTable);

    document.getElementById("matrixFilter")
        ?.addEventListener("change", renderTable);

}
