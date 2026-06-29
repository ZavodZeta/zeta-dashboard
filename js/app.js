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

        // Парсим товары
        const products = parseProducts();

        console.log("Товаров:", products.length);

        // Выполняем аналитику
        const analytics = calculateAnalytics(products);

        // Строим Dashboard
        initDashboard(analytics);

        console.log("Dashboard успешно построен.");

    }

    catch(error){

        console.error(error);

        alert("Ошибка запуска Dashboard.");

    }

}
