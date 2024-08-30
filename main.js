import './style.css'

// Carrega o Google Charts
google.charts.load('current', {
  packages: ['corechart']
});

// Chama a função de desenho do gráfico quando o Google Charts está pronto
google.charts.setOnLoadCallback(drawChart);

// Seus dados
const data = [
  { local: "Hospital", distancia: 4.4, car: 10, bike: 20, hike: 40 },
  { local: "Delegacia", distancia: 2.4, car: 5, bike: 10, hike: 20 }
];

function drawChart() {
  const chartData = new google.visualization.DataTable();

  // Define as colunas do gráfico
  chartData.addColumn('string', 'Local');
  chartData.addColumn('number', 'Carro (minutos)');
  chartData.addColumn('number', 'Bicicleta (minutos)');
  chartData.addColumn('number', 'Caminhada (minutos)');

  // Adiciona as linhas de dados
  data.forEach(item => {
    chartData.addRow([`${item.local} (${item.distancia}km)`, item.car, item.bike, item.hike]);
  });

  const options = {
    title: 'Tempo em Minutos para Distâncias em KM',
    subtitle: 'Distância em KM e tempo em minutos por transporte',
    hAxis: { title: 'Locais e Distâncias (km)' }, // Rótulo do eixo horizontal
    vAxis: { title: 'Tempo (minutos)' }, // Rótulo do eixo vertical
    legend: { position: 'bottom' }, // Legenda na parte inferior
    isStacked: true, // Gráfico empilhado
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c'] // Cores para os transportes
  };

  const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(chartData, options);
}


