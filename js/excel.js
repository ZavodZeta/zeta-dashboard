// ===========================================
// ZETA Dashboard v3
// excel.js
// ===========================================

let workbook = null;
let sheets = {};
let products = [];

async function loadExcel() {

    console.log("Загрузка report.xlsx...");

    const response = await fetch("data/report.xlsx");

    if (!response.ok) {
        throw new Error("Файл report.xlsx не найден");
    }

    const buffer = await response.arrayBuffer();

    workbook = XLSX.read(buffer, {
        type: "array"
    });

    sheets = {};

    workbook.SheetNames.forEach(name => {

        sheets[name] = XLSX.utils.sheet_to_json(
            workbook.Sheets[name],
            {
                defval: ""
            }
        );

    });

    console.log("Листы Excel:");

    console.table(workbook.SheetNames);

    loadProducts();

}


// ===========================================
// Загрузка листа ABC_XYZ_Product
// ===========================================

function loadProducts() {

    products = [];

    const rows = getSheet("ABC_XYZ_Product");

    if (!rows.length) {

        console.error("Лист ABC_XYZ_Product не найден.");

        return;

    }

    rows.forEach(row => {

        products.push({

            name: getText(row["Товар"]),

            quantity: getNumber(row["Количество"]),

            revenue: getNumber(row["Выручка"]),

            share: getNumber(row["Доля"]),

            cumulative: getNumber(row["Накопит."]),

            abc: getText(row["ABC"]),

            xyz: getText(row["XYZ"]),

            category: getText(row["Категория"])

        });

    });

    console.log("Товаров загружено:", products.length);

    console.table(products.slice(0,10));

}


// ===========================================
// Получить лист
// ===========================================

function getSheet(name){

    return sheets[name] || [];

}


// ===========================================
// Получить все товары
// ===========================================

function getProducts(){

    return products;

}


// ===========================================
// Получить число
// ===========================================

function getNumber(value){

    if(value===null) return 0;

    if(value===undefined) return 0;

    if(value==="") return 0;

    if(typeof value==="number") return value;

    value=String(value)
        .replace(/\s/g,"")
        .replace(",", ".");

    return Number(value)||0;

}


// ===========================================
// Получить текст
// ===========================================

function getText(value){

    if(value===null) return "";

    if(value===undefined) return "";

    return String(value).trim();

}
