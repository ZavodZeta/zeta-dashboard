// ======================================
// excel.js
// Загрузка Excel
// ======================================

let workbook = null;
let sheets = {};

async function loadExcel() {

    try {

        const response = await fetch("data/report.xlsx");

        if (!response.ok) {
            throw new Error("Не удалось загрузить report.xlsx");
        }

        const arrayBuffer = await response.arrayBuffer();

        workbook = XLSX.read(arrayBuffer, {
            type: "array"
        });

        workbook.SheetNames.forEach(sheetName => {

            sheets[sheetName] = XLSX.utils.sheet_to_json(
                workbook.Sheets[sheetName],
                {
                    defval: ""
                }
            );

        });

        console.log("✅ Excel успешно загружен");
        console.log("Листы:", workbook.SheetNames);

        initDashboard();

    } catch (error) {

        console.error(error);

        alert("Ошибка загрузки файла report.xlsx");

    }

}