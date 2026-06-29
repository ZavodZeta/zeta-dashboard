// ===========================================
// ZETA Dashboard v2
// app.js
// Точка входа приложения
// ===========================================

document.addEventListener("DOMContentLoaded", startDashboard);

async function startDashboard() {

    console.clear();

    console.log("====================================");
    console.log(" ZETA Dashboard v2");
    console.log("====================================");

    try {

        // Загружаем Excel
        await loadExcel();

        // Получаем товары
        const products = parseProducts();

        console.log("Товаров:", products.length);

        // Выполняем расчёты
        calculateAnalytics(products);

        // Строим Dashboard
        initDashboard(products);

        console.log("Dashboard успешно построен.");

    }

    catch (error) {

        console.error(error);

        alert("Ошибка запуска Dashboard.");

    }

}
