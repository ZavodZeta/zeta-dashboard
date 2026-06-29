// ===========================================
// parser.js
// ===========================================

function parseProducts() {

    const rows = getSheet("ABC_XYZ_Prodact");

    if (!rows.length) {

        console.error("Лист ABC_XYZ_Prodact не найден.");

        return [];

    }

    const products = rows.map(row => ({

        sku: row["SKU"],

        name: row["Наименование"],

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

    }));

    console.log("Parser OK");

    console.table(products);

    return products;

}
