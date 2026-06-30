// ===========================================
// ZETA Dashboard v3
// dashboard.js
// ===========================================

function initDashboard(products) {

    console.log("==================================");
    console.log("Построение Dashboard...");
    console.log("Товаров:", products.length);
    console.log("==================================");

    drawKPI(products);

    // Эти функции будем переделывать следующими.
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

    const sku = products.length;

    const A = products.filter(p => p.abc === "A").length;
    const B = products.filter(p => p.abc === "B").length;
    const C = products.filter(p => p.abc === "C").length;

    const X = products.filter(p => p.xyz === "X").length;
    const Y = products.filter(p => p.xyz === "Y").length;
    const Z = products.filter(p => p.xyz === "Z").length;

    const matrix = {
        AX:0,
        AY:0,
        AZ:0,
        BX:0,
        BY:0,
        BZ:0,
        CX:0,
        CY:0,
        CZ:0
    };

    products.forEach(product => {

        if (matrix.hasOwnProperty(product.category)) {

            matrix[product.category]++;

        }

    });

    setValue("revenue", revenue.toLocaleString("ru-RU") + " ₸");
    setValue("quantity", quantity.toLocaleString("ru-RU"));
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
// Универсальная установка значения
// ===========================================

function setValue(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent = value;

    }

}
