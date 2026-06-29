// ===========================================
// charts.js
// ===========================================

let abcChart = null;
let xyzChart = null;


// ---------------------------
// ABC
// ---------------------------

function drawABCChart(products){

    let A = 0;
    let B = 0;
    let C = 0;

    products.forEach(item=>{

        const abc = getText(item["ABC"]);

        if(abc==="A") A++;
        if(abc==="B") B++;
        if(abc==="C") C++;

    });

    if(abcChart){

        abcChart.destroy();

    }

    const ctx=document.getElementById("abcChart");

    abcChart=new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:["A","B","C"],

            datasets:[{

                data:[A,B,C],

                backgroundColor:[

                    "#27ae60",

                    "#f39c12",

                    "#e74c3c"

                ]

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

    });

}



// ---------------------------
// XYZ
// ---------------------------

function drawXYZChart(products){

    let X=0;
    let Y=0;
    let Z=0;

    products.forEach(item=>{

        const xyz=getText(item["XYZ"]);

        if(xyz==="X") X++;
        if(xyz==="Y") Y++;
        if(xyz==="Z") Z++;

    });

    if(xyzChart){

        xyzChart.destroy();

    }

    const ctx=document.getElementById("xyzChart");

    xyzChart=new Chart(ctx,{

        type:"bar",

        data:{

            labels:["X","Y","Z"],

            datasets:[{

                data:[X,Y,Z],

                backgroundColor:[

                    "#3498db",

                    "#9b59b6",

                    "#e74c3c"

                ]

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

    });

}
