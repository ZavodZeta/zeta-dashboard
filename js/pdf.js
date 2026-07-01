// ===========================================
// ZETA Dashboard v4
// pdf.js
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("pdfBtn");

    if (!button) return;

    button.addEventListener("click", exportPDF);

});

// ===========================================
// Экспорт PDF
// ===========================================

async function exportPDF() {

    try {

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({

            orientation: "portrait",
            unit: "mm",
            format: "a4"

        });

        // -----------------------------------
        // Заголовок
        // -----------------------------------

        pdf.setFont("helvetica", "bold");

        pdf.setFontSize(20);

        pdf.text("ZETA BI Dashboard", 20, 20);

        pdf.setFontSize(11);

        pdf.setFont("helvetica", "normal");

        pdf.text(
            "Отчет по ABC / XYZ анализу",
            20,
            28
        );

        pdf.text(
            "Дата: " + new Date().toLocaleString("ru-RU"),
            20,
            35
        );

        // -----------------------------------
        // KPI
        // -----------------------------------

        let y = 50;

        addLine(pdf, "Выручка", "revenue", y);
        y += 10;

        addLine(pdf, "Количество", "quantity", y);
        y += 10;

        addLine(pdf, "SKU", "sku", y);
        y += 10;

        addLine(pdf, "Категория A", "a", y);
        y += 10;

        addLine(pdf, "Категория B", "b", y);
        y += 10;

        addLine(pdf, "Категория C", "c", y);
        y += 10;

        addLine(pdf, "Категория X", "x", y);
        y += 10;

        addLine(pdf, "Категория Y", "y", y);
        y += 10;

        addLine(pdf, "Категория Z", "z", y);

        // -----------------------------------
        // Сохранение
        // -----------------------------------

        const fileName =
            "ZETA_Report_" +
            new Date().toISOString().substring(0, 10) +
            ".pdf";

        pdf.save(fileName);

    }

    catch (error) {

        console.error(error);

        alert("Ошибка создания PDF");

    }

}

// ===========================================
// Добавить строку
// ===========================================

function addLine(pdf, title, id, y) {

    const value =
        document.getElementById(id)?.textContent || "-";

    pdf.setFont("helvetica", "bold");

    pdf.text(title + ":", 20, y);

    pdf.setFont("helvetica", "normal");

    pdf.text(value, 70, y);

}
