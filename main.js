const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Hospital', 'Delegacia'],
    datasets: [
      {
        label: 'Carro',
        data: [10, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Bicicleta',
        data: [20, 15],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Caminhada',
        data: [50, 40],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      }
    ]
  },
  options: {
    responsive: true,
    indexAxis: 'y', // Transforma em barras horizontais
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tempo (min)',
        },
        ticks: {
          beginAtZero: true
        }
      },
      y: {
        title: {
          display: true,
          text: 'Localidade',
        }
      }
    }
  }
});
