import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"
import { House } from "@medusajs/icons"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Bar, Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"]

// Datos para gráficos
const datasets = {
  bar1: {
    label: "Ventas",
    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    bg: "rgba(75, 192, 192, 0.6)",
  },
  bar2: {
    label: "Pedidos",
    data: [1000, 1200, 1500, 1700, 1400, 1600, 1800],
    bg: "rgba(255, 99, 132, 0.6)",
  },
  bar3: {
    label: "Productos",
    data: [600, 700, 800, 750, 770, 820, 900],
    bg: "rgba(54, 162, 235, 0.6)",
  },
  line1: {
    label: "Visitas",
    data: [1200, 1900, 3000, 5000, 2000, 3000, 4000],
    border: "rgba(153, 102, 255, 1)",
    bg: "rgba(153, 102, 255, 0.2)",
  },
  line2: {
    label: "Usuarios registrados",
    data: [200, 400, 600, 800, 1000, 1200, 1500],
    border: "rgba(255, 159, 64, 1)",
    bg: "rgba(255, 159, 64, 0.2)",
  },
  line3: {
    label: "Consultas soporte",
    data: [50, 70, 60, 80, 90, 100, 120],
    border: "rgba(75, 192, 192, 1)",
    bg: "rgba(75, 192, 192, 0.2)",
  },
}

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: false },
  },
}

const CustomPage = () => {
  return (
    <Container className="p-4 space-y-6">
      <Heading level="h1">Dashboard</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Gráfico 1 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Ventas</Heading>
          <Bar data={{
            labels,
            datasets: [
              { label: datasets.bar1.label, data: datasets.bar1.data, backgroundColor: datasets.bar1.bg }
            ]
          }} options={options} />
        </div>

        {/* Gráfico 2 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Pedidos</Heading>
          <Bar data={{
            labels,
            datasets: [
              { label: datasets.bar2.label, data: datasets.bar2.data, backgroundColor: datasets.bar2.bg }
            ]
          }} options={options} />
        </div>

        {/* Gráfico 3 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Productos</Heading>
          <Bar data={{
            labels,
            datasets: [
              { label: datasets.bar3.label, data: datasets.bar3.data, backgroundColor: datasets.bar3.bg }
            ]
          }} options={options} />
        </div>

        {/* Gráfico 4 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Visitas</Heading>
          <Line data={{
            labels,
            datasets: [
              {
                label: datasets.line1.label,
                data: datasets.line1.data,
                borderColor: datasets.line1.border,
                backgroundColor: datasets.line1.bg,
                tension: 0.4
              }
            ]
          }} options={options} />
        </div>

        {/* Gráfico 5 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Usuarios registrados</Heading>
          <Line data={{
            labels,
            datasets: [
              {
                label: datasets.line2.label,
                data: datasets.line2.data,
                borderColor: datasets.line2.border,
                backgroundColor: datasets.line2.bg,
                tension: 0.4
              }
            ]
          }} options={options} />
        </div>

        {/* Gráfico 6 */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-2 text-base">Consultas al soporte</Heading>
          <Line data={{
            labels,
            datasets: [
              {
                label: datasets.line3.label,
                data: datasets.line3.data,
                borderColor: datasets.line3.border,
                backgroundColor: datasets.line3.bg,
                tension: 0.4
              }
            ]
          }} options={options} />
        </div>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Dashboard",
  icon: House,
})

export default CustomPage
