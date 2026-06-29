// ===========================================
// ZETA Dashboard
// abcxyz.js
// Матрица ABC × XYZ
// ===========================================

function drawMatrix(products) {

    const matrix = {

        AX: 0,
        AY: 0,
        AZ: 0,

        BX: 0,
        BY: 0,
        BZ: 0,

        CX: 0,
        CY: 0,
        CZ: 0

    };

    products.forEach(item => {

        const abc = getText(item["ABC"]).toUpperCase();

        const xyz = getText(item["XYZ"]).toUpperCase();

        const key = abc + xyz;

        if (matrix.hasOwnProperty(key)) {

            matrix[key]++;

        }

    });

    Object.keys(matrix).forEach(cell => {

        const element = document.getElementById(cell);

        if (element) {

            element.innerHTML = matrix[cell];

        }

    });

    console.log("Матрица ABC×XYZ построена.");

    console.table(matrix);

}
