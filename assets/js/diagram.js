

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Год', 'Продажи', 'Расходы'],
        ['2018',  1000,      400],
        ['2019',  1170,      460],
        ['2020',  660,       1120],
        ['2021',  1030,      540]
    ]);

    var options = {
        title: 'Obereg',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}