import { environmentalScore } from "./environmentalScore"
import { AluminiumRegion, aluminiumFootprint } from "./footprintItems/aluminiumFootprint"
import { BatteryChemistry, BatteryRegion, batteryFootprint } from "./footprintItems/batteryFootprint"
import { FerrousMetalsCountry, ferrousMetalsFootprint } from "./footprintItems/ferrousMetalsFootprint"
import { ManufacturingCountry, manufacturingFootprint } from "./footprintItems/manufacturingFootprint"
import { OtherMaterialsRegion, otherMaterialsFootprint } from "./footprintItems/otherMaterialsFootprint"
import { TransportationSettings, transportationFootprint } from "./footprintItems/transportationFootprint"

export interface ChartData {
  label: string,
  data: number,
  backgroundColor: string,
  borderColor: string,
}

export class FootprintEstimator {
  totalMassAluminiumKg: number
  aluminiumRegion: AluminiumRegion
  totalMassFerrousMetalsKg: number
  massBatteryKg: number
  ferrousMetalsCountry: FerrousMetalsCountry
  totalMassWithoutBatteryKg: number
  totalMassOtherThanFerrousMetalsOrAluminiumKg: number
  otherMaterialsRegion: OtherMaterialsRegion
  massWithoutDriverKg: number
  manufacturingCountry: ManufacturingCountry
  batteryCapacityKWh: number
  batteryRegion: BatteryRegion
  chemistry: BatteryChemistry
  transportationSettings: TransportationSettings[]
  isLargeCar: boolean

  constructor(params: {
    totalMassAluminiumKg: number,
    aluminiumRegion: AluminiumRegion,
    totalMassFerrousMetalsKg: number,
    massBatteryKg: number,
    ferrousMetalsCountry: FerrousMetalsCountry,
    totalMassWithoutBatteryKg: number,
    manufacturingCountry: ManufacturingCountry,
    totalMassOtherThanFerrousMetalsOrAluminiumKg: number,
    otherMaterialsRegion: OtherMaterialsRegion,
    massWithoutDriverKg: number,
    batteryCapacityKWh: number,
    batteryRegion: BatteryRegion,
    chemistry: BatteryChemistry,
    transportationSettings: TransportationSettings[],
    isLargeCar: boolean
  }
  ) {
    this.totalMassAluminiumKg = params.totalMassAluminiumKg
    this.aluminiumRegion = params.aluminiumRegion
    this.totalMassFerrousMetalsKg = params.totalMassFerrousMetalsKg
    this.massBatteryKg = params.massBatteryKg
    this.ferrousMetalsCountry = params.ferrousMetalsCountry
    this.totalMassWithoutBatteryKg = params.totalMassWithoutBatteryKg
    this.totalMassOtherThanFerrousMetalsOrAluminiumKg = params.totalMassOtherThanFerrousMetalsOrAluminiumKg
    this.massWithoutDriverKg = params.massWithoutDriverKg
    this.batteryCapacityKWh = params.batteryCapacityKWh
    this.batteryRegion = params.batteryRegion
    this.chemistry = params.chemistry
    this.transportationSettings = params.transportationSettings
    this.isLargeCar = params.isLargeCar
    this.manufacturingCountry = params.manufacturingCountry;
    this.otherMaterialsRegion = params.otherMaterialsRegion;
  }

  public getAluminiumFootprint(): number {
    return aluminiumFootprint({
      totalMassAluminiumKg: this.totalMassAluminiumKg,
      region: this.aluminiumRegion
    })
  }

  public getFerrousMetalsFootprint(): number {
    return ferrousMetalsFootprint({
      totalMassFerrousMetalsKg: this.totalMassFerrousMetalsKg,
      country: this.ferrousMetalsCountry
    })
  }

  public getManufacturingFootprint(): number {
    return manufacturingFootprint({
      totalMassWithoutBatteryKg: this.totalMassWithoutBatteryKg,
      country: this.manufacturingCountry
    })
  }

  public getOtherMaterialsFootprint(): number {
    return otherMaterialsFootprint({
      totalMassOtherThanFerrousMetalsOrAluminiumKg: this.totalMassOtherThanFerrousMetalsOrAluminiumKg,
      region: this.otherMaterialsRegion
    })
  }

  public getBatteryFootprint(): number {
    return batteryFootprint({
      batteryCapacityKWh: this.batteryCapacityKWh,
      region: this.batteryRegion,
      chemistry: this.chemistry
    })
  }

  public getTransportationFootprint(): number {
    return transportationFootprint({
      massWithoutDriverKg: this.massWithoutDriverKg,
      transportationSettings: this.transportationSettings
    })
  }

  public getTotalFootprint(): number {
    return this.getAluminiumFootprint()
      + this.getFerrousMetalsFootprint()
      + this.getManufacturingFootprint()
      + this.getOtherMaterialsFootprint()
      + this.getBatteryFootprint()
      + this.getTransportationFootprint()
  }

  public getEnvironmentalScore(): number {
    return environmentalScore({
      ECversion: this.getTotalFootprint(),
      isLargeCar: this.isLargeCar
    })
  }

  public isEligibleForBonus(): boolean {
    return this.getEnvironmentalScore() >= 60
  }

  public getChartData(): ChartData[] {
    return [
      {
        label: 'Aluminium',
        data: this.getAluminiumFootprint(),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)'
      },
      {
        label: 'Métaux ferreux',
        data: this.getFerrousMetalsFootprint(),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)'
      },
      {
        label: 'Transformations et assemblage',
        data: this.getManufacturingFootprint(),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)'
      },
      {
        label: 'Autres matériaux',
        data: this.getOtherMaterialsFootprint(),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)'
      },
      {
        label: 'Batterie',
        data: this.getBatteryFootprint(),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)'
      },
      {
        label: 'Transport',
        data: this.getTransportationFootprint(),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)'
      }
    ]
  }
}