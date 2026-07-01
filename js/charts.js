// ===========================================
// ZETA Dashboard v4
// charts.js
// ===========================================

let abcChart = null;
let xyzChart = null;

// ===========================================
// Построение графиков
// ===========================================

function drawCharts(products) {

    drawABCChart(products);
    drawXYZChart(products);

}

// ===========================================
// Pareto (ТОП-15)
// ===========================================

function drawABCChart(products) {

    const sorted = [...products].sort((a, b) => b.revenue - a.revenue);

    const totalRevenue = sorted.reduce((sum, p) => sum + p.revenue, 0);

    const items = sorted.slice(0, 15);

    let cumulative = 0;

    const labels = [];
    const revenue = [];
    const cumulativePercent = [];

    items.forEach(item => {

        labels.push(

            item.name.length > 24
                ? item.name.substring(0, 24) + "..."
                : item.name

        );

        revenue.push(item.revenue);

        cumulative += item.revenue;

        cumulativePercent.push(

            ((cumulative / totalRevenue) * 100).toFixed(1)

        );

    });

    if (abcChart) {

        abcChart.destroy();

    }

    abcChart = new Chart(

        document.getElementById("abcChart"),

        {

            data: {

                labels,

                datasets: [

                    {

                        type: "bar",

                        label: "Выручка",

                        data: revenue,

                        borderRadius: 8,

                        yAxisID: "y"

                    },

                    {

                        type: "line",

                        label: "Накопительный %",

                        data: cumulativePercent,

                        borderWidth: 3,

                        tension: .35,

                        pointRadius: 4,

                        yAxisID: "y1"

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: {

                    mode: "index",

                    intersect: false

                },

                plugins: {

                    legend: {

                        position: "bottom"

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true

                    },

                    y1: {

                        position: "right",

                        min: 0,

                        max: 100,

                        grid: {

                            drawOnChartArea: false

                        },

                        ticks: {

                            callback: value => value + "%"

                        }

                    }

                }

            }

        }

    );

}

// ===========================================
// XYZ
// ===========================================

function drawXYZChart(products) {

    const summary = {

        X: 0,

        Y: 0,

        Z: 0

    };

    products.forEach(product => {

        if (summary.hasOwnProperty(product.xyz)) {

            summary[product.xyz]++;

        }

    });

    if (xyzChart) {

        xyzChart.destroy();

    }

    xyzChart = new Chart(

        document.getElementById("xyzChart"),

        {

            type: "doughnut",

            data: {

                labels: [

                    "X",

                    "Y",

                    "Z"

                ],

                datasets: [

                    {

                        data: [

                            summary.X,

                            summary.Y,

                            summary.Z

                        ],

                        backgroundColor: [

                            "#2ecc71",

                            "#f39c12",

                            "#e74c3c"

                        ]

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position: "bottom"

                    }

                }

            }

        }

    );

}
