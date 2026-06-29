// ===========================================
// dashboard.js
// Основная логика Dashboard
// ===========================================

function initDashboard() {

    console.log("Запуск Dashboard...");

    // Получаем данные с основного листа
    let products = getSheet("ABC_XYZ_Prodact");

    // Если такого листа нет — пробуем другой
    if (products.length === 0) {

        products = getSheet("ABC_Product");

    }

    if (products.length === 0) {

        console.error("Не найден лист с товарами.");

        return;

    }

    // KPI
    drawKPI(products);

    // Диаграммы
    drawABCChart(products);
    drawXYZChart(products);

    // Матрица
    drawMatrix(products);

    // Таблица
    drawTable(products);

    console.log("Dashboard успешно построен.");

}

// ===========================================
// KPI
// ===========================================

function drawKPI(products) {

    let revenue = 0;

    const sku = products.length;

    const clients = new Set();

    let abcA = 0;

    products.forEach(item => {

        revenue += getNumber(item["Выручка"]);

        if (item["Клиент"]) {

            clients.add(item["Клиент"]);

        }

        if (getText(item["ABC"]).toUpperCase() === "A") {

            abcA++;

        }

    });

    document.getElementById("revenue").innerHTML =
        revenue.toLocaleString("ru-RU") + " ₸";

    document.getElementById("sku").innerHTML = sku;

    document.getElementById("clients").innerHTML = clients.size;

    document.getElementById("abc").innerHTML =
        Math.round((abcA / sku) * 100) + " %";

}
