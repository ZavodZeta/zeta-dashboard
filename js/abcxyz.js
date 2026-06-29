// ===========================================
// abcxyz.js
// Матрица ABC × XYZ
// ===========================================

function drawMatrix(products){

    const matrix = {

        AX:0,
        AY:0,
        AZ:0,

        BX:0,
        BY:0,
        BZ:0,

        CX:0,
        CY:0,
        CZ:0

    };

    products.forEach(item=>{

        const key = item.matrix;

        if(matrix.hasOwnProperty(key)){

            matrix[key]++;

        }

    });

    const container = document.getElementById("matrix");

    container.innerHTML="";

    Object.keys(matrix).forEach(key=>{

        const div=document.createElement("div");

        div.className="matrix-cell "+key.toLowerCase();

        div.innerHTML=`
            <div style="font-size:22px">${key}</div>
            <div style="font-size:34px">${matrix[key]}</div>
        `;

        container.appendChild(div);

    });

    console.log("Матрица построена");

    console.table(matrix);

}
