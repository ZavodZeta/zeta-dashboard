function drawMatrix(products){

let matrix={

AX:0,AY:0,AZ:0,

BX:0,BY:0,BZ:0,

CX:0,CY:0,CZ:0

};

products.forEach(item=>{

const key=item["Матрица"];

if(matrix[key]!=undefined)
matrix[key]++;

});

Object.keys(matrix).forEach(key=>{

document.getElementById(key).innerHTML=matrix[key];

});

}