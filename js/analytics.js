// ===========================================
// ZETA Dashboard v3
// analytics.js
//
// В версии v3 аналитика рассчитывается в Excel.
// Dashboard только отображает готовые данные.
// ===========================================

function calculateAnalytics(products) {

    if (!Array.isArray(products)) {

        console.error("calculateAnalytics(): массив товаров не получен.");

        return [];

    }

    console.log("====================================");
    console.log(" ZETA Analytics");
    console.log("====================================");

    console.log("ABC/XYZ анализ загружен из Excel.");

    // Небольшая сводка
    const summary = {

        revenue: products.reduce((sum, p) => sum + (p.revenue || 0), 0),

        quantity: products.reduce((sum, p) => sum + (p.quantity || 0), 0),

        sku: products.length,

        A: products.filter(p => p.abc === "A").length,
        B: products.filter(p => p.abc === "B").length,
        C: products.filter(p => p.abc === "C").length,

        X: products.filter(p => p.xyz === "X").length,
        Y: products.filter(p => p.xyz === "Y").length,
        Z: products.filter(p => p.xyz === "Z").length

    };

    console.table(summary);

    console.log("====================================");

    return products;

}
