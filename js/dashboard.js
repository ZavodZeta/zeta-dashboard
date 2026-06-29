// ===========================================
// ZETA Dashboard v2
// dashboard.js
// ===========================================

function initDashboard(products) {

    console.log("Построение Dashboard...");

    drawKPI(products);

    drawCharts(products);

    drawMatrix(products);

    drawTable(products);

    console.log("Dashboard готов.");

}

// ===========================================
// KPI
// ===========================================

function drawKPI(products){

    const revenue = products.reduce((sum, p) => sum + (p.revenue || 0), 0);

    const profit = products.reduce((sum, p) => sum + (p.profit || 0), 0);

    const sku = products.length;

    const clients = getSheet("ABC_Clients")
        ? getSheet("ABC_Clients").length
        : 0;

    document.getElementById("revenue").textContent =
        Number(revenue).toLocaleString("ru-RU") + " ₸";

    document.getElementById("profit").textContent =
        Number(profit).toLocaleString("ru-RU") + " ₸";

    document.getElementById("sku").textContent = sku;

    document.getElementById("clients").textContent = clients;

}
