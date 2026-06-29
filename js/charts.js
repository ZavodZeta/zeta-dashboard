// ===========================================
// ZETA Dashboard v2
// charts.js
// ===========================================

let abcChart = null;
let xyzChart = null;


// -------------------------
// ABC
// -------------------------

function drawABCChart(products){

    let A = 0;
    let B = 0;
    let C = 0;

    products.forEach(item=>{

        if(item.abc==="A") A++;

        else if(item.abc==="B") B++;

        else C++;

    });

    if(abcChart){

        abcChart.destroy();

    }

    abcChart = new Chart(

        document.getElementById("abcChart"),

        {

            type:"doughnut",

            data:{

                labels:["A","B","C"],

                datasets:[{

                    data:[A,B,C]

                }]

            },

            options:{

                responsive:true,

                plugins:{

                    legend:{

                        position:"bottom"

                    }

                }

            }

        }

    );

}



// -------------------------
// XYZ
// -------------------------

function drawXYZChart(products){

    let X = 0;
    let Y = 0;
    let Z = 0;

    products.forEach(item=>{

        if(item.xyz==="X") X++;

        else if(item.xyz==="Y") Y++;

        else Z++;

    });

    if(xyzChart){

        xyzChart.destroy();

    }

    xyzChart = new Chart(

        document.getElementById("xyzChart"),

        {

            type:"bar",

            data:{

                labels:["X","Y","Z"],

                datasets:[{

                    label:"SKU",

                    data:[X,Y,Z]

                }]

            },

            options:{

                responsive:true,

                plugins:{

                    legend:{

                        display:false

                    }

                },

                scales:{

                    y:{

                        beginAtZero:true

                    }

                }

            }

        }

    );

}
