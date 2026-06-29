// ===========================================
// parser.js
// Чтение товаров из Excel
// ===========================================

function parseProducts() {

    const rows = getSheet("ABC_XYZ_Prodact");

    if (!rows || rows.length === 0) {

        console.error("Лист ABC_XYZ_Prodact не найден.");

        return [];

    }

    const products = [];

    rows.forEach(row => {

        const sku = getText(row["SKU"]);

        // Берем только реальные товары
        if (!sku.startsWith("SKU")) {
            return;
        }

        products.push({

            sku: sku,

            name: getText(row["Наименование"]),

            revenue: getNumber(row["Выручка"]),

            cost: getNumber(row["Себестоимость"]),

            profit: getNumber(row["Валовая прибыль"]),

            abc: getText(row["ABC"]),

            xyz: getText(row["XYZ"]),

            matrix: getText(row["Матрица"]),

            cv: getNumber(row["CV (коэфф. вариации)"]),

            average: getNumber(row["Среднее, продается за период"]),

            stdDev: getNumber(row["StdDev (стандартное отклонение)"]),

            months: [

                getNumber(row["Jan"]),
                getNumber(row["Feb"]),
                getNumber(row["Mar"]),
                getNumber(row["Apr"]),
                getNumber(row["May"]),
                getNumber(row["Jun"])

            ]

        });

    });

    console.log("===================================");
    console.log("Parser успешно выполнен");
    console.log("Найдено товаров:", products.length);
    console.log("===================================");

    console.table(products);

    return products;

}
