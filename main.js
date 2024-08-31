import './style.css'

const data = {
  labels: ['Hospital', 'Delegacia'],
  datasets: [
    {
      label: 'Distância (km)',
      data: [4.4, 2.4],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      yAxisID: 'y',
    },
    {
      label: 'Carro (min)',
      data: [10, 5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      yAxisID: 'y1',
    },
    {
      label: 'Bicicleta (min)',
      data: [20, 10],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      yAxisID: 'y1',
    },
    {
      label: 'Caminhada (min)',
      data: [40, 20],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      yAxisID: 'y1',
    },
  ],
};


