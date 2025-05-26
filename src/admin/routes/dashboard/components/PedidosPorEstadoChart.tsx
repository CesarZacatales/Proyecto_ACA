import { Doughnut } from 'react-chartjs-2'

const pedidosPorEstado = [
  { estado: "Pendiente", cantidad: 12 },
  { estado: "Procesando", cantidad: 20 },
  { estado: "Enviado", cantidad: 18 },
  { estado: "Recibido", cantidad: 10 },
  { estado: "Cancelado", cantidad: 5 },
  { estado: "Extraviado", cantidad: 2 }
]

const colors = [
  "#3b65ff", // Pendiente - color base azul
  "#667eea", // Procesando - lavanda azul
  "#5ed3f3", // Enviado - celeste claro
  "#38bdf8", // Recibido - azul cielo
  "#6c5ce7", // Cancelado - verde menta
  "#94a3b8"  // Extraviado - gris azulado
]

export default function PedidosEstadoChart() {
  return (
    <Doughnut
      data={{
        labels: pedidosPorEstado.map(p => p.estado),
        datasets: [{
          label: "Pedidos por Estado",
          data: pedidosPorEstado.map(p => p.cantidad),
          backgroundColor: colors,
          borderWidth: 1,
        }]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#fff",
              font: { size: 12 },
            }
          },
          title: {
            display: true,
            text: "Distribución de Pedidos por Estado",
            color: "#fff",
            font: {
              size: 16,
              weight: "bold"
            }
          }
        }
      }}
    />
  )
}
