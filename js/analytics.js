// ===========================================
// ZETA Dashboard v4
// analytics.js
//
// Аналитика рассчитывается в report.xlsx.
// Dashboard только отображает готовые данные.
// ===========================================

function calculateAnalytics(products) {

    if (!Array.isArray(products)) {

        console.error("calculateAnalytics(): товары не загружены.");

        return [];

    }

    console.log("====================================");
    console.log("       ZETA Analytics v4");
    console.log("====================================");

    // ----------------------------------------
    // Общие показатели
    // ----------------------------------------

    const summary = {

        revenue: products.reduce((sum, p) => sum + (p.revenue || 0), 0),

        quantity: products.reduce((sum, p) => sum + (p.quantity || 0), 0),

        profit: products.reduce((sum, p) => sum + (p.profit || 0), 0),

        sku: products.length,

        A: products.filter(p => p.abc === "A").length,
        B: products.filter(p => p.abc === "B").length,
        C: products.filter(p => p.abc === "C").length,

        X: products.filter(p => p.xyz === "X").length,
        Y: products.filter(p => p.xyz === "Y").length,
        Z: products.filter(p => p.xyz === "Z").length

    };

    console.table(summary);

    // ----------------------------------------
    // ТОП-5 товаров по выручке
    // ----------------------------------------

    const topProducts = [...products]
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5);

    console.log("ТОП-5 товаров по выручке");

    console.table(topProducts.map(item => ({

        SKU: item.sku,

        Наименование: item.name,

        Выручка: item.revenue,

        ABC: item.abc,

        XYZ: item.xyz,

        Категория: item.category

    })));

    console.log("====================================");

    return products;

}
