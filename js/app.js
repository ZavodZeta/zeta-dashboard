// ===========================================
// ZETA Dashboard
// app.js
// Точка входа приложения
// ===========================================

window.addEventListener("DOMContentLoaded", () => {

    console.clear();

    console.log("====================================");
    console.log("       ZETA ANALYTICS DASHBOARD");
    console.log("====================================");

    loadExcel();

});

const reloadButton = document.getElementById("reload");

if (reloadButton) {

    reloadButton.addEventListener("click", () => {

        location.reload();

    });

}
