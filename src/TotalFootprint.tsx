import { FootprintEstimator } from "./methodology/footprintEstimator";

export function TotalFootprint(props: { footprintEstimator: FootprintEstimator }) {
  return (
    <div className="font-medium">
      {Math.round(props.footprintEstimator.getTotalFootprint()).toLocaleString()} kgCO2e
    </div>
  )
}