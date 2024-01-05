import { InputNumber, Slider } from "antd";
import { ReactNode } from "react";

export function SettingsSlider(props: {
  min?: number,
  max?: number,
  value: number,
  className?: string,
  extra?: ReactNode,
  precision?: number,
  onChange: (value: number) => void,
}) {
  const { className, min, max, value, onChange, extra, precision } = props;
  return (
    <div className={`${className ?? ''} flex flex-wrap gap-1`}>
      <div className="flex-shrink">
        <InputNumber
          min={0}
          max={max}
          value={value}
          precision={precision}
          onChange={value => onChange(value)}
        />
      </div>
      <div className="flex-grow" style={{ minWidth: '100px' }}>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={value => onChange(value)}
        />
      </div>
      {extra && (
        <div >
          {extra}
        </div>
      )}
    </div>
  )
}