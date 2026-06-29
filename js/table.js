// ===========================================
// table.js
// Таблица товаров
// ===========================================

function drawTable(products){

    const tbody = document.querySelector("#productTable tbody");

    tbody.innerHTML = "";

    // Сортируем по прибыли
    products.sort((a,b)=>b.profit-a.profit);

    products.forEach(item=>{

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.sku}</td>
            <td>${item.name}</td>
            <td>${item.revenue.toLocaleString("ru-RU")} ₸</td>
            <td>${item.profit.toLocaleString("ru-RU")} ₸</td>
            <td>${item.abc}</td>
            <td>${item.xyz}</td>
            <td>${(item.cv*100).toFixed(1)} %</td>
            <td><strong>${item.matrix}</strong></td>
        `;

        tbody.appendChild(tr);

    });

    console.log("Таблица построена.");

}
