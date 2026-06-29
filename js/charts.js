// ===========================================
// ZETA Dashboard
// charts.js
// ===========================================

let abcChart = null;
let xyzChart = null;

function drawCharts(statistics) {

    // Удаляем старые графики
    if (abcChart) {
        abcChart.destroy();
    }

    if (xyzChart) {
        xyzChart.destroy();
    }

    // ===== ABC =====

    const abcCanvas = document.getElementById("abcChart");

    abcChart = new Chart(abcCanvas, {

        type: "doughnut",

        data: {

            labels: ["A", "B", "C"],

            datasets: [{

                data: [

                    statistics.abc.A,

                    statistics.abc.B,

                    statistics.abc.C

                ],

                backgroundColor: [

                    "#27ae60",

                    "#f39c12",

                    "#e74c3c"

                ],

                borderWidth: 2

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

    // ===== XYZ =====

    const xyzCanvas = document.getElementById("xyzChart");

    xyzChart = new Chart(xyzCanvas, {

        type: "bar",

        data: {

            labels: [

                "X",

                "Y",

                "Z"

            ],

            datasets: [{

                label: "Количество SKU",

                data: [

                    statistics.xyz.X,

                    statistics.xyz.Y,

                    statistics.xyz.Z

                ],

                backgroundColor: [

                    "#3498db",

                    "#9b59b6",

                    "#e74c3c"

                ]

            }]

        },

        options: {

            responsive: true,

            scales: {

                y: {

                    beginAtZero: true

                }

            },

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}
