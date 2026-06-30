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

function drawABCChart(products) {

    const counts = { A: 0, B: 0, C: 0 };

    products.forEach(product => {

        if (counts.hasOwnProperty(product.abc)) {

            counts[product.abc]++;

        }

    });

    if (abcChart) {
        abcChart.destroy();
    }

    abcChart = new Chart(

        document.getElementById("abcChart"),

        {

            type: "doughnut",

            data: {

                labels: ["A", "B", "C"],

                datasets: [{

                    label: "Количество товаров",

                    data: [
                        counts.A,
                        counts.B,
                        counts.C
                    ],

                    backgroundColor: [
                        "#2ecc71",
                        "#f1c40f",
                        "#e74c3c"
                    ],

                    borderWidth: 1

                }]

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
