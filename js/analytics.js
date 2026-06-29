// ===========================================
// analytics.js
// Расчет всей аналитики
// ===========================================

function calculateAnalytics(products) {

    const items = [...products];

    // -----------------------------
    // Прибыль
    // -----------------------------

    items.forEach(item => {

        item.profit = item.revenue - item.cost;

    });

    // -----------------------------
    // ABC анализ
    // -----------------------------

    items.sort((a, b) => b.profit - a.profit);

    const totalProfit = items.reduce((sum, item) => sum + item.profit, 0);

    let cumulative = 0;

    items.forEach(item => {

        item.share = totalProfit === 0
            ? 0
            : item.profit / totalProfit;

        cumulative += item.share;

        item.cumulative = cumulative;

        if (cumulative <= 0.80) {

            item.abc = "A";

        }

        else if (cumulative <= 0.95) {

            item.abc = "B";

        }

        else {

            item.abc = "C";

        }

    });

    // -----------------------------
    // XYZ анализ
    // -----------------------------

    items.forEach(item => {

        const months = item.months;

        const average =
            months.reduce((a, b) => a + b, 0) / months.length;

        const variance =
            months.reduce((sum, value) => {

                return sum + Math.pow(value - average, 2);

            }, 0) / months.length;

        const stdDev = Math.sqrt(variance);

        const cv = average === 0 ? 0 : stdDev / average;

        item.average = average;

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

    console.log("Analytics готов");

    console.table(items);

    return items;

}
