// ===========================================
// dashboard.js
// ZETA Dashboard
// ===========================================

function initDashboard() {

    console.log("Запуск Dashboard...");

    // Основной лист с товарами
    const products = getSheet("ABC_XYZ_Prodact");

    if (products.length === 0) {

        alert("Лист ABC_XYZ_Prodact не найден!");

        return;

    }

    drawKPI(products);

    drawABCChart(products);

    drawXYZChart(products);

    drawMatrix(products);

    drawTable(products);

    console.log("Dashboard построен.");

}


// ===========================================
// KPI
// ===========================================

function drawKPI(products){

    let revenue = 0;

    let countA = 0;

    products.forEach(item=>{

        revenue += getNumber(item["Выручка"]);

        if(getText(item["ABC"])==="A"){

            countA++;

        }

    });

    const sku = products.length;

    // Берем клиентов с отдельного листа
    const clients = getSheet("ABC_Clients").length;

    document.getElementById("revenue").innerHTML =
        revenue.toLocaleString("ru-RU")+" ₸";

    document.getElementById("sku").innerHTML = sku;

    document.getElementById("clients").innerHTML = clients;

    document.getElementById("abc").innerHTML =
        Math.round(countA/sku*100)+" %";

}
