// ===========================================
// ZETA Dashboard v2
// excel.js
// ===========================================

let workbook = null;
let sheets = {};

async function loadExcel() {

    console.log("Загрузка report.xlsx...");

    const response = await fetch("data/report.xlsx");

    if (!response.ok) {
        throw new Error("Файл data/report.xlsx не найден.");
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

    console.log("===================================");
    console.log("Excel успешно загружен.");
    console.log("Листы:");

    console.table(workbook.SheetNames);

    console.log("===================================");

}


// ===========================================
// Получить лист
// ===========================================

function getSheet(name) {

    if (sheets[name]) {

        return sheets[name];

    }

    console.warn("Лист не найден:", name);

    return [];

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
