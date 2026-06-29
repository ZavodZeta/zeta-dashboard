function drawCharts(products){

let a=0;
let b=0;
let c=0;

let x=0;
let y=0;
let z=0;

products.forEach(item=>{

if(item["ABC"]=="A") a++;
if(item["ABC"]=="B") b++;
if(item["ABC"]=="C") c++;

if(item["XYZ"]=="X") x++;
if(item["XYZ"]=="Y") y++;
if(item["XYZ"]=="Z") z++;

});

new Chart(document.getElementById("abcChart"),{

type:"doughnut",

data:{

labels:["A","B","C"],

datasets:[{

data:[a,b,c]

}]

}

});

new Chart(document.getElementById("xyzChart"),{

type:"bar",

data:{

labels:["X","Y","Z"],

datasets:[{

data:[x,y,z]

}]

}

});

}