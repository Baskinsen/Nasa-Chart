
chartIt()
async function chartIt() {
    const data = await getData()
    const ctx = document.getElementById('chart').getContext('2d');
     const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xLabel,
            datasets: [{
                label: 'Global and Hemispheric Monthly Means and Zonal Annual Means',
                data: data.yLabel,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        }
    });
}



 async function getData() {
    const xLabel = []
    const yLabel = []
    const response = await fetch('./ZonAnn.Ts+dSST.csv')
    const data = await response.text()

    const table = data.split('\n').splice(1)
    table.forEach(row => {
        const columns = row.split(',')
        const year = columns[0]
        const temp = columns[1]
        xLabel.push(year)
        yLabel.push(parseFloat(temp)  + 14)
        
    })
    return {xLabel, yLabel}
}
