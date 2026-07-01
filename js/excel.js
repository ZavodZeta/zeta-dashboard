// ===========================================
// ZETA Dashboard v4
// excel.js
// ===========================================

let workbook = null;
let sheets = {};
let products = [];

// ===========================================
// Загрузка Excel
// ===========================================

async function loadExcel() {

    console.log("Загрузка report.xlsx...");

    const response = await fetch("data/report.xlsx");

    if (!response.ok) {
        throw new Error("Файл report.xlsx не найден.");
    }

    const buffer = await response.arrayBuffer();

    workbook = XLSX.read(buffer, {
        type: "array"
    });

    sheets = {};

    workbook.SheetNames.forEach(sheetName => {

        sheets[sheetName] = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName],
            {
                defval: ""
            }
        );

    });

    console.log("====================================");
    console.log("Excel успешно загружен");
    console.table(workbook.SheetNames);
    console.log("====================================");

    loadProducts();

}

// ===========================================
// Загрузка товаров
// ===========================================

function loadProducts() {

    products = [];

    const rows = getSheet("ABC_XYZ_Product");

    if (!rows.length) {

        console.error("Лист ABC_XYZ_Product не найден.");

        return;

    }

    rows.forEach((row, index) => {

        const product = {

            // ----------------------------
            // Основная информация
            // ----------------------------

            sku:
                getText(row["SKU"]) ||
                ("SKU-" + String(index + 1).padStart(5, "0")),

            name:
                getText(row["Наименование"]) ||
                getText(row["Товар"]),

            // ----------------------------
            // Продажи по месяцам
            // ----------------------------

            jan: getNumber(row["Jan"]),
            feb: getNumber(row["Feb"]),
            mar: getNumber(row["Mar"]),
            apr: getNumber(row["Apr"]),
            may: getNumber(row["May"]),
            jun: getNumber(row["Jun"]),

            months: [

                getNumber(row["Jan"]),
                getNumber(row["Feb"]),
                getNumber(row["Mar"]),
                getNumber(row["Apr"]),
                getNumber(row["May"]),
                getNumber(row["Jun"])

            ],

            // ----------------------------
            // Финансы
            // ----------------------------

            quantity: getNumber(row["Количество"]),

            revenue: getNumber(row["Выручка"]),

            cost: getNumber(row["Себестоимость"]),

            profit: getNumber(row["Валовая прибыль"]),

            // ----------------------------
            // ABC XYZ
            // ----------------------------

            share: getNumber(row["Доля"]),

            cumulative:
                getNumber(row["Накопительный %"]) ||
                getNumber(row["Накопит."]),

           average: getNumber(row["Среднее"]),

            stdDev: getNumber(row["StdDev"]),

            cv: getNumber(row["CV"]),

            abc: getText(row["ABC"]),

            xyz: getText(row["XYZ"]),

            category:
                getText(row["Матрица"]) ||
                getText(row["Категория"])

        };

        products.push(product);

    });

    console.log("====================================");
    console.log("Товаров загружено:", products.length);
    console.log("====================================");

    console.table(products.slice(0, 10));

}

// ===========================================
// Получить лист
// ===========================================

function getSheet(name) {

    return sheets[name] || [];

}

// ===========================================
// Получить товары
// ===========================================

function getProducts() {

    return products;

}

// ===========================================
// Получить число
// ===========================================

function getNumber(value) {

    if (value === null) return 0;

    if (value === undefined) return 0;

    if (value === "") return 0;

    if (typeof value === "number") return value;

    value = String(value)
        .replace(/\s/g, "")
        .replace(",", ".");

    return Number(value) || 0;

}

// ===========================================
// Получить текст
// ===========================================

function getText(value) {

    if (value === null) return "";

    if (value === undefined) return "";

    return String(value).trim();

}
