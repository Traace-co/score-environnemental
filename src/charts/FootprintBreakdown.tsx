import { Pie } from "react-chartjs-2"
import { FootprintEstimator } from "../methodology/footprintEstimator"


export function FootprintBreakdown(props: {
  footprintEstimator: FootprintEstimator
}) {
  const {
    footprintEstimator
  } = props

  const chartData = footprintEstimator.getChartData()

  const data = {
    labels: chartData.map(data => data.label),
    datasets: [
      {
        label: "Émissions totales d'une voiture électrique",
        data: chartData.map(data => data.data),
        backgroundColor: chartData.map(data => data.backgroundColor),
        borderColor: chartData.map(data => data.borderColor),
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data}
    options={{
      plugins: {
        legend: {
          position: "right",
        },
      }
    }} />
}