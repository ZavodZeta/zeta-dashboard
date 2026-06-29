// ===========================================
// table.js
// ===========================================

function drawTable(products){

    const tbody = document.querySelector("#productTable tbody");

    tbody.innerHTML = "";

    products.sort((a,b)=>(b.profit||0)-(a.profit||0));

    products.forEach(item=>{

        const tr=document.createElement("tr");

        tr.innerHTML=`
            <td>${item.sku || ""}</td>
            <td>${item.name || ""}</td>

            <td>${(item.revenue || 0).toLocaleString("ru-RU")} ₸</td>

            <td>${(item.profit || 0).toLocaleString("ru-RU")} ₸</td>

            <td>${item.abc || "-"}</td>

            <td>${item.xyz || "-"}</td>

            <td>${((item.cv || 0)*100).toFixed(1)} %</td>

            <td>${item.matrix || "-"}</td>
        `;

        tbody.appendChild(tr);

    });

    console.log("Таблица построена.");

}
