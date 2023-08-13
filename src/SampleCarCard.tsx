import { Button } from "antd";
import { EnvironmentalScore } from "./EnvironmentalScore";
import { TotalFootprint } from "./TotalFootprint";
import { HorizontalBarChart } from "./charts/HorizontalBarChart";
import { FootprintEstimator } from "./methodology/footprintEstimator";

export interface SampleCar {
  footprintEstimator: FootprintEstimator
  emoji: string
  name: string
}

export function SampleCarCard(props: { car: SampleCar, maxTotalFootprint: number, onCarSelected: (car: SampleCar) => void }) {
  const { car, maxTotalFootprint, onCarSelected } = props
  const { footprintEstimator, name, emoji } = car
  return (
    <div className="flex flex-wrap p-4 border rounded">
        <div className="flex flex-col gap-2">
          <div className="font-medium text-lg">
            {`${emoji} ${name}`}
          </div>
          <div className="flex flex-row">
            <EnvironmentalScore footprintEstimator={footprintEstimator} />
          </div>
          <div>
            {footprintEstimator.isEligibleForBonus()
              ? (
                <span>✅ Éligible au bonus écologique</span>
              )
              : (
                <span>❌ Non éligible au bonus écologique</span>
              )}
          </div>
          <TotalFootprint footprintEstimator={footprintEstimator} />
          <Button
            size='small'
            onClick={() => onCarSelected(car)}>
            Voir dans simulateur
          </Button>
        </div>
        <div className="flex-grow">
          <HorizontalBarChart car={props.car} maxTotalFootprint={maxTotalFootprint} />
        </div>
    </div>
  )
}