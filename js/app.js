// ===========================================
// ZETA Dashboard v3
// app.js
// Точка входа приложения
// ===========================================

document.addEventListener("DOMContentLoaded", startDashboard);

async function startDashboard() {

    console.clear();

    console.log("====================================");
    console.log(" ZETA Dashboard v3");
    console.log("====================================");

    try {

        // Загружаем Excel
        await loadExcel();

        // Получаем товары из excel.js
        const products = getProducts();

        if (!products.length) {

            throw new Error("Не найдено ни одного товара на листе ABC_XYZ_Product.");

        }

        console.log("====================================");
        console.log("Товаров загружено:", products.length);
        console.log("====================================");

        // Аналитика (если функция существует)
        if (typeof calculateAnalytics === "function") {

            calculateAnalytics(products);

        }

        // Построение Dashboard
        initDashboard(products);

        console.log("====================================");
        console.log("Dashboard успешно построен.");
        console.log("====================================");

    }

    catch (error) {

        console.error(error);

        alert(
            "Ошибка запуска Dashboard.\n\n" +
            error.message
        );

    }

}
