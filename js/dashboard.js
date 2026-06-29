// ===========================================
// ZETA Dashboard
// excel.js
// Загрузка Excel и подготовка данных
// ===========================================

let workbook = null;
let sheets = {};

async function loadExcel() {

    try {

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

        console.log("");

        console.log("===== Найденные листы =====");

        console.table(workbook.SheetNames);

        console.log("");

        workbook.SheetNames.forEach(name => {

            console.log("Лист:", name);

            console.table(sheets[name].slice(0,5));

        });

        console.log("===================================");

        console.log("Excel успешно загружен.");

        console.log("===================================");

        initDashboard();

    }

    catch(error){

        console.error(error);

        alert(

            "Не удалось открыть файл data/report.xlsx"

        );

    }

}

/* =======================================
   Вспомогательные функции
======================================= */

function getSheet(name){

    if(sheets[name]){

        return sheets[name];

    }

    console.warn("Лист не найден:",name);

    return [];

}

function getNumber(value){

    if(value===null) return 0;

    if(value===undefined) return 0;

    if(value==="") return 0;

    if(typeof value==="number") return value;

    value = String(value)

        .replace(/\s/g,"")

        .replace(",", ".");

    return Number(value)||0;

}

function getText(value){

    if(value===null) return "";

    if(value===undefined) return "";

    return String(value).trim();

}﻿
