import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"
import { House } from "@medusajs/icons"
import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Pie } from "react-chartjs-2"
import GananciasChart from "./components/GananciasChart"
import { SortProductsDesc, SortByOrdersDesc, FilterByRegionOrders10 } from "./utils"
import PedidosEstadoChart from "./components/PedidosPorEstadoChart"

type OrdersByCustomer = {
  customer: string
  orders: number
}

type CollectionProduct = {
  collection_name: string
  product_count: number
}

type RegionOrder = {
  region_name: string
  order_count: number
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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
  const [collectionProducts, setCollectionProducts] = useState<CollectionProduct[]>([])

  const [ordersByRegion, setOrdersByRegion] = useState<RegionOrder[]>([])

  useEffect(() => {
    fetch("http://localhost:9000/routes/region_order")
      .then(res => res.json())
      .then((data) => {
        // Solo regiones con menos de 10 órdenes
        const filtered = FilterByRegionOrders10(data)
        setOrdersByRegion(filtered)
      })
      .catch(err => console.error("Error al cargar órdenes por región:", err))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9000/routes/client_order")
      .then(res => res.json())
      .then((data) => {
        // Ordena descendente por número de pedidos
        const sorted = SortByOrdersDesc(data)
        setOrdersByCustomer(sorted)
      })
      .catch(err => console.error("Error al cargar métrica:", err))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9000/routes/collection_product")
      .then(res => res.json())
      .then((data) => {
        // Ordena descendente por número de productos
        const sorted = SortProductsDesc(data)
        setCollectionProducts(sorted)
      })
      .catch(err => console.error("Error al cargar colección de productos:", err))
  }, [])


  return (
    <Container className="p-4 space-y-6">
      <Heading level="h1">Dashboard</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Gráfico: Pedidos por Cliente */}
        <div className="h-96 w-full p-4 rounded-xl border-2 shadow">
          <Bar
            data={{
              labels: ordersByCustomer.map((c) => c.customer),
              datasets: [
                {
                  label: "Pedidos",
                  data: ordersByCustomer.map((c) => c.orders),
                  backgroundColor: "#3b65ff",
                  borderRadius: 8,
                  barThickness: 20,
                  categoryPercentage: 0.6,
                  barPercentage: 0.8,

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
                    color: "#fff",
                  },
                  grid: {
                    display: true,
                    color: "#444",
                  },
                },
                y: {
                  ticks: {
                    font: { size: 12 },
                    color: "#fff",
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Pedidos por Cliente",
                  color: "#fff",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                },
                legend: {
                  position: "top",
                  labels: {
                    font: { size: 12 },
                    color: "#fff",
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

        {/* Gráfico: Ganancias Mensuales */}
        <div className="h-96 w-full p-4 rounded-xl border-2 shadow col-span-2">
          <GananciasChart />
        </div>

        {/* Gráfico: Productos por Colección */}
        <div className="h-96 w-full p-4 rounded-xl border-2 shadow">
          <Bar
            data={{
              labels: collectionProducts.map((c) => c.collection_name),
              datasets: [
                {
                  label: "Productos",
                  data: collectionProducts.map((c) => c.product_count),
                  backgroundColor: "#3b65ff",
                  borderRadius: 8,
                  barThickness: 32,
                  categoryPercentage: 0.6,
                  barPercentage: 0.8,
                },
              ],
            }}
            options={{
              ...options,
              indexAxis: "x",
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    font: { size: 12 },
                    color: "#fff",
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    font: { size: 12 },
                    color: "#fff",
                  },
                  grid: {
                    display: true,
                    color: "#444",
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Productos por Colección",
                  color: "#fff",
                  font: {
                    size: 16,
                    weight: "bold",
                  },
                },
                legend: {
                  position: "top",
                  labels: {
                    font: { size: 12 },
                    color: "#fff",
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

        {/* Gráfico: Órdenes por Región (<10) */}
        <div className="h-96 w-full p-4 rounded-xl border-2 shadow">
          <Pie
            data={{
              labels: ordersByRegion.map((r) => r.region_name),
              datasets: [
                {
                  label: "Órdenes",
                  data: ordersByRegion.map((r) => r.order_count),
                  backgroundColor: [
                    "#3b65ff",  // Azul principal (igual que otras gráficas)
                    "#5c8aff",  // Azul más claro
                    "#7caeff",  // Azul pastel
                    "#aac8ff",  // Azul grisáceo
                    "#334155",  // Gris oscuro azulado (cool gray)
                    "#64748b",  // Slate gray medio
                    "#94a3b8",  // Slate claro
                  ],
                  borderColor: "#444",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: {
                    color: "#fff",
                    font: { size: 12 },
                  },
                },
                title: {
                  display: true,
                  text: "Órdenes por Región (<10)",
                  color: "#fff",
                  font: {
                    size: 16,
                    weight: "bold",
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

        {/* Gráfico: Pedidos por Estado */}
        <div className="h-96 w-full p-4 rounded-xl border-2 shadow">
          <PedidosEstadoChart />
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
