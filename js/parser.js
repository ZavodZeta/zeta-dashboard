// ===========================================
// parser.js
// ===========================================

function parseProducts() {

    const rows = getSheet("ABC_XYZ_Prodact");

    if (!rows.length) {

        console.error("Лист не найден");

        return [];

    }

    const products = [];

    rows.forEach(row => {

        const sku = String(row["SKU"] || "").trim();

        // пропускаем пустые строки
        if (!sku) return;

        // пропускаем пояснения
        if (!sku.startsWith("SKU")) return;

        products.push({

            sku: sku,

            name: row["Наименование"] || "",

            revenue: getNumber(row["Выручка"]),

            cost: getNumber(row["Себестоимость"]),

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
