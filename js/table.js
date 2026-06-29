function drawTable(products){

const tbody=document.querySelector("#productsTable tbody");

tbody.innerHTML="";

products
.sort((a,b)=>b["Выручка"]-a["Выручка"])
.slice(0,20)
.forEach(item=>{

tbody.innerHTML+=`

<tr>

<td>${item["Наименование"]}</td>

<td>${Number(item["Выручка"]).toLocaleString("ru-RU")}</td>

<td>${item["ABC"]}</td>

<td>${item["XYZ"]}</td>

</tr>

`;

});

}