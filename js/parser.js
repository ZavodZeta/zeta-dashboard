// ===========================================
// parser.js
// ===========================================

function parseProducts() {

    const rows = getSheet("ABC_XYZ_Prodact");

    if (!rows || rows.length === 0) {

        console.error("Лист ABC_XYZ_Prodact не найден.");

        return [];

    }

    const products = [];

    rows.forEach(row => {

        // Берем только реальные товары
        if (
            !row["SKU"] ||
            !String(row["SKU"]).trim().startsWith("SKU")
        ) {
            return;
        }

        products.push({

            sku: String(row["SKU"]).trim(),

            name: row["Наименование"] || "",

            revenue: getNumber(row["Выручка"]),

            cost: getNumber(row["Себестоимость"]),

            profit:
                getNumber(row["Выручка"]) -
                getNumber(row["Себестоимость"]),

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

    console.log("Parser OK");

    console.table(products);

    return products;

}
