// ===========================================
// ZETA Dashboard v2
// dashboard.js
// ===========================================

function initDashboard(products) {

    console.log("Построение Dashboard...");

    drawKPI(products);

    drawABCChart(products);

    drawXYZChart(products);

    drawMatrix(products);

    drawTable(products);

}

// ===========================================
// KPI
// ===========================================

function drawKPI(products){

    const revenue = products.reduce((sum,item)=>sum+item.revenue,0);

    const profit = products.reduce((sum,item)=>sum+item.profit,0);

    const sku = products.length;

    const clients = getSheet("ABC_Clients").length;

    document.getElementById("revenue").innerHTML =
        revenue.toLocaleString("ru-RU")+" ₸";

    document.getElementById("profit").innerHTML =
        profit.toLocaleString("ru-RU")+" ₸";

    document.getElementById("sku").innerHTML =
        sku;

    document.getElementById("clients").innerHTML =
        clients;

}
