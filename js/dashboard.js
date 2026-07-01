// ===========================================
// ZETA Dashboard v4
// dashboard.js
// ===========================================

function initDashboard(products) {

    console.log("==================================");
    console.log("Построение Dashboard...");
    console.log("Товаров:", products.length);
    console.log("==================================");

    drawKPI(products);
    drawSummary(products);

    if (typeof drawCharts === "function") {
        drawCharts(products);
    }

    if (typeof drawMatrix === "function") {
        drawMatrix(products);
    }

    if (typeof drawTable === "function") {
        drawTable(products);
    }

    console.log("Dashboard готов.");

}

// ===========================================
// KPI
// ===========================================

function drawKPI(products) {

    const revenue = products.reduce((sum, p) => sum + (p.revenue || 0), 0);

    const quantity = products.reduce((sum, p) => sum + (p.quantity || 0), 0);

    const profit = products.reduce((sum, p) => sum + (p.profit || 0), 0);

    const sku = products.length;

    const A = products.filter(p => p.abc === "A").length;
    const B = products.filter(p => p.abc === "B").length;
    const C = products.filter(p => p.abc === "C").length;

    const X = products.filter(p => p.xyz === "X").length;
    const Y = products.filter(p => p.xyz === "Y").length;
    const Z = products.filter(p => p.xyz === "Z").length;

    const matrix = {
        AX: 0, AY: 0, AZ: 0,
        BX: 0, BY: 0, BZ: 0,
        CX: 0, CY: 0, CZ: 0
    };

    products.forEach(product => {

        if (matrix.hasOwnProperty(product.category)) {

            matrix[product.category]++;

        }

    });

    setValue("revenue", revenue.toLocaleString("ru-RU") + " ₸");
    setValue("quantity", quantity.toLocaleString("ru-RU"));
    setValue("profit", profit.toLocaleString("ru-RU") + " ₸");
    setValue("sku", sku);

    setValue("a", A);
    setValue("b", B);
    setValue("c", C);

    setValue("x", X);
    setValue("y", Y);
    setValue("z", Z);

    Object.keys(matrix).forEach(key => {

        setValue(key.toLowerCase(), matrix[key]);

    });

}

// ===========================================
// Сводка руководителя
// ===========================================

function drawSummary(products) {

    const summary = document.getElementById("summary");

    if (!summary) return;

    const revenue = products.reduce((s, p) => s + (p.revenue || 0), 0);

    const quantity = products.reduce((s, p) => s + (p.quantity || 0), 0);

    const profit = products.reduce((s, p) => s + (p.profit || 0), 0);

    const leader = [...products]
        .sort((a, b) => b.revenue - a.revenue)[0];

    const A = products.filter(p => p.abc === "A").length;

    const AX = products.filter(p => p.category === "AX").length;

    const CZ = products.filter(p => p.category === "CZ").length;

    summary.innerHTML = `

    <div class="summary-grid">

        <div class="summary-card">

            <h3>💰 Общая выручка</h3>

            <p>${revenue.toLocaleString("ru-RU")} ₸</p>

        </div>

        <div class="summary-card">

            <h3>💵 Валовая прибыль</h3>

            <p>${profit.toLocaleString("ru-RU")} ₸</p>

        </div>

        <div class="summary-card">

            <h3>📦 Количество</h3>

            <p>${quantity.toLocaleString("ru-RU")}</p>

        </div>

        <div class="summary-card">

            <h3>🏆 Лидер продаж</h3>

            <p>${leader ? leader.name : "-"}</p>

        </div>

        <div class="summary-card">

            <h3>🟢 Категория A</h3>

            <p>${A} товаров</p>

        </div>

        <div class="summary-card">

            <h3>⭐ Категория AX</h3>

            <p>${AX} товаров</p>

        </div>

        <div class="summary-card">

            <h3>⚠ Категория CZ</h3>

            <p>${CZ} товаров</p>

        </div>

    </div>

    <div class="summary-text">

        <h3>Управленческий вывод</h3>

        <p>

        За первое полугодие ассортимент сформировал
        выручку <strong>${revenue.toLocaleString("ru-RU")} ₸</strong>
        при валовой прибыли
        <strong>${profit.toLocaleString("ru-RU")} ₸</strong>.

        Основной вклад в продажи обеспечивают товары
        категории <strong>AX</strong>, которые рекомендуется
        поддерживать в постоянном наличии.

        Категория <strong>CZ</strong> содержит
        <strong>${CZ}</strong> товаров со сравнительно
        низкой значимостью и нестабильным спросом.
        Рекомендуется провести анализ остатков,
        оборачиваемости и целесообразности дальнейшего хранения.

        </p>

    </div>

    `;

}

// ===========================================
// Универсальная установка значения
// ===========================================

function setValue(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent = value;

    }

}
