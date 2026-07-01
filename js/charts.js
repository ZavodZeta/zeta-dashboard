// ===========================================
// ZETA Dashboard v3
// charts.js
// ===========================================

let abcChart = null;
let xyzChart = null;

// ===========================================
// Построение всех графиков
// ===========================================

function drawCharts(products) {

    drawABCChart(products);
    drawXYZChart(products);

}

// ===========================================
// ABC (Кольцевая диаграмма)
// ===========================================

// ===========================================
// ТОП-15 товаров по выручке
// ===========================================

function drawABCChart(products){

    const items=[...products]
        .sort((a,b)=>b.revenue-a.revenue)
        .slice(0,15);

    let total=items.reduce((s,p)=>s+p.revenue,0);

    let cumulative=0;

    const labels=[];
    const revenue=[];
    const percent=[];

    items.forEach(item=>{

        labels.push(

            item.name.length>20
            ? item.name.substring(0,20)+"..."
            : item.name

        );

        revenue.push(item.revenue);

        cumulative+=item.revenue;

        percent.push(

            (cumulative/total*100).toFixed(1)

        );

    });

    if(abcChart){

        abcChart.destroy();

    }

    abcChart=new Chart(

        document.getElementById("abcChart"),

        {

            data:{

                labels,

                datasets:[

                    {

                        type:"bar",

                        label:"Выручка",

                        data:revenue,

                        yAxisID:"y",

                        borderRadius:6

                    },

                    {

                        type:"line",

                        label:"Накопительный %",

                        data:percent,

                        yAxisID:"y1",

                        tension:.35,

                        pointRadius:5

                    }

                ]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                interaction:{

                    mode:"index"

                },

                plugins:{

                    legend:{

                        position:"bottom"

                    }

                },

                scales:{

                    y:{

                        beginAtZero:true

                    },

                    y1:{

                        position:"right",

                        min:0,

                        max:100,

                        grid:{

                            drawOnChartArea:false

                        }

                    }

                }

            }

        }

    );

}
// ===========================================
// XYZ (Столбчатая диаграмма)
// ===========================================

function drawXYZChart(products) {

    const counts = { X: 0, Y: 0, Z: 0 };

    products.forEach(product => {

        if (counts.hasOwnProperty(product.xyz)) {

            counts[product.xyz]++;

        }

    });

    if (xyzChart) {
        xyzChart.destroy();
    }

    xyzChart = new Chart(

        document.getElementById("xyzChart"),

        {

            type: "bar",

            data: {

                labels: ["X", "Y", "Z"],

                datasets: [{

                    label: "Количество товаров",

                    data: [
                        counts.X,
                        counts.Y,
                        counts.Z
                    ],

                    backgroundColor: [
                        "#3498db",
                        "#f39c12",
                        "#9b59b6"
                    ]

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        ticks: {

                            precision: 0

                        }

                    }

                }

            }

        }

    );

}
