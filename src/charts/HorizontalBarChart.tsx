import { Bar } from "react-chartjs-2";
import { SampleCar } from "../SampleCarCard";
import useIsMobile from "../utils/useIsMobile";

export function HorizontalBarChart(props: {
  car: SampleCar
  maxTotalFootprint: number
}) {
  const { car: { footprintEstimator }, maxTotalFootprint } = props

  const isMobile = useIsMobile()

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        max: Math.ceil(maxTotalFootprint / 1000) * 1000
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: {
        display: !isMobile,
        position: 'right' as const,
      },
      title: {
        display: true,
        text: "Décomposition de l'empreinte carbone (kgCO2e)",
      },
    },
  }

  const data = {
    labels: [isMobile ? '' : 'Empreinte carbone (kgCO2e)'],
    datasets: footprintEstimator
      .getChartData()
      .map(data => (
        {
          label: data.label,
          data: [data.data],
          borderColor: data.borderColor,
          backgroundColor: data.backgroundColor,
        }
      )
      )
  }
  return (
    <div className="w-full">
      <Bar height={isMobile ? 100 : 50} options={options} data={data} />
    </div>
  )
}