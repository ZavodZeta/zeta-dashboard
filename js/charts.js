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

function drawABCChart(products) {

    const topProducts = [...products]
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 15);

    const labels = topProducts.map(item => {

        let name = item.name || "";

        if (name.length > 28) {

            name = name.substring(0, 28) + "...";

        }

        return name;

    });

    const revenue = topProducts.map(item => item.revenue);

    if (abcChart) {

        abcChart.destroy();

    }

    abcChart = new Chart(

        document.getElementById("abcChart"),

        {

            type: "bar",

            data: {

                labels: labels,

                datasets: [{

                    label: "Выручка, ₸",

                    data: revenue,

                    borderRadius: 8,

                    backgroundColor: "#1976d2"

                }]

            },

            options: {

                indexAxis: "y",

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: false

                    },

                    title: {

                        display: true,

                        text: "ТОП-15 товаров по выручке"

                    }

                },

                scales: {

                    x: {

                        ticks: {

                            callback: function(value){

                                return new Intl.NumberFormat("ru-RU").format(value);

                            }

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
