import { Line } from "react-chartjs-2";

const gananciasData = [
  { mes: "Enero", total: 12000 },
  { mes: "Febrero", total: 15000 },
  { mes: "Marzo", total: 14000 },
  { mes: "Abril", total: 18000 },
  { mes: "Mayo", total: 22000 },
  { mes: "Junio", total: 21000 },
  { mes: "Julio", total: 25000 },
  { mes: "Agosto", total: 24000 },
  { mes: "Septiembre", total: 26000 },
  { mes: "Octubre", total: 28000 },
  { mes: "Noviembre", total: 30000 },
  { mes: "Diciembre", total: 32000 },
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: { color: "#fff" },
    },
    title: {
      display: true,
      text: "Total de Ganancias Mensuales (USD)",
      color: "#fff",
      font: { size: 16 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#fff",
        callback: (value: number | string) => {
          if (typeof value === "number") {
            return `$${value.toLocaleString()}`;
          }
          return value;
        },
      },
      grid: {
        color: "#444",
        borderColor: "#444",
      },
    },
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        color: "#444",
        borderColor: "#444",
      },
    },
  },
};

export default function GananciasChart() {
  return (
    <Line
      data={{
        labels: gananciasData.map((d) => d.mes),
        datasets: [
          {
            label: "Ganancias",
            data: gananciasData.map((d) => d.total),
            borderColor: "#3b65ff",
            backgroundColor: "rgba(59, 101, 255, 0.3)",
          },
        ],
      }}
      options={options}
    />
  );
}
