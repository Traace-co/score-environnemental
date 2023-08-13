import { Tooltip } from "antd";
import { FootprintEstimator } from "./methodology/footprintEstimator";

export function EnvironmentalScore(props: { footprintEstimator: FootprintEstimator }) {
    return (
        <div className="flex flex-col">
            <Tooltip title="Score environnemental. Le score minimum nécessaire pour le bonus écologique est fixé à 60. Sa valeur maximum est 80.">
                <div className="p-2 rounded bg-gray-100">
                    <div className="text-lg font-bold">
                        🌍 Score : {props.footprintEstimator.getEnvironmentalScore().toFixed(1)}
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}