Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'



const printCharts = () => {
    renderModelsChart()
    renderFeaturesChart()
    renderModelsChart2()
    renderModelsChart3()


}
const renderModelsChart = () => {
    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            data: [1504, 1255, 1152, 1051, 982, 1001 ],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: "left"
            }
        }
    }

    new Chart("modelsChart", { type: "doughnut", data, options })
}



const renderFeaturesChart = () => {

    const data = {
        labels: ["Facebook", "Youtube", "Amazon"],
        datasets: [

            {
                label: 'Enero',
                data: [550, 602, 700], // Datos inventados para Peso
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            },
            {
                label: 'Febrero',
                data: [705, 800, 820], // Datos inventados para Longitud de piernas
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            },
            {
                label: 'Marzo',
                data: [600, 605, 602], // Datos inventados para Altura del torso
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            },
            {
                label: 'Abril',
                data: [400, 420, 308], // Datos inventados para Talla de zapatos
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            },
            {
                label: 'Mayo',
                data: [680, 508, 604], // Datos inventados para Peso
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            },
            {
                label: 'Junio',
                data: [750, 402, 607], // Datos inventados para Peso
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20)
            }
        ]
    }


    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false

                }
            }

        }
    }

    new Chart("featuresChart", { type: "radar", data, options })
}



const renderModelsChart2 = () => {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: '2021',
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20),
                data: [680, 508, 604, 680, 508, 604, 680, 508, 604],
            }, {
                type: 'line',
                label: '2020',
                borderColor: getDataColors(),
                backgroundColor: getDataColors(20),
                data: [520, 408, 522, 550, 460, 304, 480, 308, 204],
            }
        ]
    }
    const options = {

        scaleFontColor: '#fff',
        scales: {
            yAxes: [{
                ticks: {
                    display: true
                }
            }],
            xAxes: [{
                barPercentage: 0.4,
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart("modelsChart2", { type: "bar", data, options })
}
const renderModelsChart3 = () => {
    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            data: [7000, 6500, 8500, 5500, 7500, 8000],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    const options = {
        plugins: {
            legend: {
                position: "left"
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false

                }
            }

        }
    }

    new Chart("modelsChart3", { type: "polarArea", data, options })
}


printCharts()
