// ======================================
// dashboard.js
// ======================================

function initDashboard() {

    const products = sheets["ABC_XYZ_Prodact"];

    if (!products) {

        alert("Не найден лист ABC_XYZ_Prodact");

        return;

    }

    let revenue = 0;

    let sku = 0;

    let abcA = 0;

    products.forEach(item=>{

        revenue += Number(item["Выручка"]) || 0;

        sku++;

        if(item["ABC"]==="A")
            abcA++;

    });

    document.getElementById("revenue").innerHTML =
        revenue.toLocaleString("ru-RU")+" ₸";

    document.getElementById("sku").innerHTML = sku;

    document.getElementById("clients").innerHTML =
        sheets["ABC_Clients"].length;

    document.getElementById("abc").innerHTML =
        Math.round(abcA/sku*100)+" %";

    drawCharts(products);

    drawMatrix(products);

    drawTable(products);

}