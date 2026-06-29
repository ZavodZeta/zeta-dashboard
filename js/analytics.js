// ===========================================
// ZETA Dashboard
// analytics.js
// Движок аналитики
// ===========================================

function calculateAnalytics(products) {

    // Копируем массив, чтобы не менять оригинал
    let items = [...products];

    // =====================================
    // Прибыль
    // =====================================

    items.forEach(item => {

        item.profit = item.revenue - item.cost;

    });

    // =====================================
    // ABC
    // =====================================

    items.sort((a, b) => b.profit - a.profit);

    const totalProfit = items.reduce((sum, item) => sum + item.profit, 0);

    let cumulative = 0;

    items.forEach(item => {

        cumulative += item.profit;

        const share = cumulative / totalProfit;

        if (share <= 0.80) {

            item.abc = "A";

        }

        else if (share <= 0.95) {

            item.abc = "B";

        }

        else {

            item.abc = "C";

        }

    });

    // =====================================
    // XYZ
    // =====================================

    items.forEach(item => {

        const months = item.months;

        const avg =
            months.reduce((a, b) => a + b, 0) / months.length;

        const variance =
            months.reduce((sum, value) => {

                return sum + Math.pow(value - avg, 2);

            }, 0) / months.length;

        const stdDev = Math.sqrt(variance);

        const cv = avg === 0 ? 0 : stdDev / avg;

        item.average = avg;

        item.stdDev = stdDev;

        item.cv = cv;

        if (cv <= 0.10) {

            item.xyz = "X";

        }

        else if (cv <= 0.25) {

            item.xyz = "Y";

        }

        else {

            item.xyz = "Z";

        }

        item.matrix = item.abc + item.xyz;

    });

    console.log("Аналитика рассчитана");

    console.table(items.slice(0,10));

    return items;

}
