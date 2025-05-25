import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"
import { House } from "@medusajs/icons"
import { useEffect, useState } from "react"

type OrdersByCustomer = {
  customer: string
  orders: number
}

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


const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: false },
  },
}

const CustomPage = () => {
  const [ordersByCustomer, setOrdersByCustomer] = useState<OrdersByCustomer[]>([])

  useEffect(() => {
    fetch("http://localhost:9000/routes/client_order")
      .then(res => res.json())
      .then((data) => {
      // Ordena descendente por número de pedidos
      const sorted = data.sort((a: { orders: number }, b: { orders: number }) => b.orders - a.orders)
      setOrdersByCustomer(sorted)
    })
      .catch(err => console.error("Error al cargar métrica:", err))
  }, [])


  return (
    <Container className="p-4 space-y-6">
      <Heading level="h1">Dashboard</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Gráfico: Pedidos por Cliente */}
        <div className="h-80 w-full bg-white p-4 rounded shadow">
          <Heading level="h2" className="mb-4 text-base text-center font-semibold text-gray-700">
            Pedidos por Cliente
          </Heading>
          <Bar
            data={{
              labels: ordersByCustomer.map((c) => c.customer),
              datasets: [
                {
                  label: "Pedidos",
                  data: ordersByCustomer.map((c) => c.orders),
                  backgroundColor: "rgba(54, 162, 235, 0.6)",
                  maxBarThickness: 28,
                },
              ],
            }}
            options={{
              ...options,
              indexAxis: "y",
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    font: { size: 12 },
                  },
                  grid: {
                    display: true,
                  },
                },
                y: {
                  ticks: {
                    font: { size: 12 },
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    font: { size: 12 },
                  },
                },
                tooltip: {
                  bodyFont: { size: 12 },
                  titleFont: { size: 12 },
                },
              },
            }}
          />
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
