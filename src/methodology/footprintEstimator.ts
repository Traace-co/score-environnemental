import { environmentalScore } from "./environmentalScore"
import { AluminiumRegion, aluminiumFootprint } from "./footprintItems/aluminiumFootprint"
import { BatteryChemistry, BatteryRegion, batteryFootprint } from "./footprintItems/batteryFootprint"
import { OtherMetalsRegion, otherMetalsFootprint } from "./footprintItems/otherMetalsFootprint"
import { ProductionCountry, productionFootprint } from "./footprintItems/productionFootprint"
import { SteelCountry, steelFootprint } from "./footprintItems/steelFootprint"
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
  totalMassSteelKg: number
  steelCountry: SteelCountry
  totalMassWithoutBatteryKg: number
  totalMassOtherThanSteelOrAluminiumKg: number
  otherMetalsRegion: OtherMetalsRegion
  massWithoutDriverKg: number
  productionCountry: ProductionCountry
  batteryCapacityKWh: number
  batteryRegion: BatteryRegion
  chemistry: BatteryChemistry
  transportationSettings: TransportationSettings[]
  isLargeCar: boolean

  constructor(params: {
    totalMassAluminiumKg: number,
    aluminiumRegion: AluminiumRegion,
    totalMassSteelKg: number,
    steelCountry: SteelCountry,
    totalMassWithoutBatteryKg: number,
    productionCountry: ProductionCountry,
    totalMassOtherThanSteelOrAluminiumKg: number,
    otherMetalsRegion: OtherMetalsRegion,
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
    this.totalMassSteelKg = params.totalMassSteelKg
    this.steelCountry = params.steelCountry
    this.totalMassWithoutBatteryKg = params.totalMassWithoutBatteryKg
    this.totalMassOtherThanSteelOrAluminiumKg = params.totalMassOtherThanSteelOrAluminiumKg
    this.massWithoutDriverKg = params.massWithoutDriverKg
    this.batteryCapacityKWh = params.batteryCapacityKWh
    this.batteryRegion = params.batteryRegion
    this.chemistry = params.chemistry
    this.transportationSettings = params.transportationSettings
    this.isLargeCar = params.isLargeCar
    this.productionCountry = params.productionCountry;
    this.otherMetalsRegion = params.otherMetalsRegion;
  }

  public getAluminiumFootprint(): number {
    return aluminiumFootprint({
      totalMassAluminiumKg: this.totalMassAluminiumKg,
      region: this.aluminiumRegion
    })
  }

  public getSteelFootprint(): number {
    return steelFootprint({
      totalMassSteelKg: this.totalMassSteelKg,
      country: this.steelCountry
    })
  }

  public getProductionFootprint(): number {
    return productionFootprint({
      totalMassWithoutBatteryKg: this.totalMassWithoutBatteryKg,
      country: this.productionCountry
    })
  }

  public getOtherMetalsFootprint(): number {
    return otherMetalsFootprint({
      totalMassOtherThanSteelOrAluminiumKg: this.totalMassOtherThanSteelOrAluminiumKg,
      region: this.otherMetalsRegion
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
      + this.getSteelFootprint()
      + this.getProductionFootprint()
      + this.getOtherMetalsFootprint()
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
        label: 'Acier',
        data: this.getSteelFootprint(),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)'
      },
      {
        label: 'Production',
        data: this.getProductionFootprint(),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)'
      },
      {
        label: 'Autres métaux',
        data: this.getOtherMetalsFootprint(),
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