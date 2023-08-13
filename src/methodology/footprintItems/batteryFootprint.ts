export function batteryFootprint(params: {
  batteryCapacityKWh: number,
  region: BatteryRegion,
  chemistry: BatteryChemistry
}) {
  const { batteryCapacityKWh, region, chemistry } = params
  const emissionFactorKgCO2ePerKWh = batteryEmissionFactorFromRegionAndChemistryKgCO2ePerKWh({
    region,
    chemistry
  })
  return batteryCapacityKWh * emissionFactorKgCO2ePerKWh
}

export enum BatteryRegion {
  Europe = 'Europe',
  USA = 'USA',
  China = 'Chine',
  SouthKorea = 'Corée du Sud',
  Japan = 'Japon',
  Other = 'Autre'
}

export enum BatteryChemistry {
  NMC111_Graphite = 'NMC111_Graphite',
  NMC532_Graphite = 'NMC532_Graphite',
  NMC622_Graphite = 'NMC622_Graphite',
  NMC811_Graphite = 'NMC811_Graphite',
  NCA_Graphite = 'NCA_Graphite',
  LFP_Graphite = 'LFP_Graphite',
  Other_Chemistry = 'Other_Chemistry'
}

export function batteryChemistryName(batteryChemistry: BatteryChemistry) {
  switch (batteryChemistry) {
    case BatteryChemistry.NMC111_Graphite: return 'NMC111 Graphite'
    case BatteryChemistry.NMC532_Graphite: return 'NMC532 Graphite'
    case BatteryChemistry.NMC622_Graphite: return 'NMC622 Graphite'
    case BatteryChemistry.NMC811_Graphite: return 'NMC811 Graphite'
    case BatteryChemistry.NCA_Graphite: return 'NCA Graphite'
    case BatteryChemistry.LFP_Graphite: return 'LFP Graphite'
    case BatteryChemistry.Other_Chemistry: return 'Autre'
    default: throw new Error(`Unknown battery chemistry: ${batteryChemistry}`)
  }
}

function batteryEmissionFactorFromRegionAndChemistryKgCO2ePerKWh(params: {
  region: BatteryRegion,
  chemistry: BatteryChemistry
}) {
  const { region, chemistry } = params
  switch (region) {
    case BatteryRegion.Europe:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 56
        case BatteryChemistry.NMC532_Graphite:
          return 55
        case BatteryChemistry.NMC622_Graphite:
          return 54
        case BatteryChemistry.NMC811_Graphite:
          return 53
        case BatteryChemistry.NCA_Graphite:
          return 57
        case BatteryChemistry.LFP_Graphite:
          return 36.5
        case BatteryChemistry.Other_Chemistry:
          return 57
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    case BatteryRegion.USA:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 60
        case BatteryChemistry.NMC532_Graphite:
          return 58
        case BatteryChemistry.NMC622_Graphite:
          return 57
        case BatteryChemistry.NMC811_Graphite:
          return 55
        case BatteryChemistry.NCA_Graphite:
          return 59
        case BatteryChemistry.LFP_Graphite:
          return 39.5
        case BatteryChemistry.Other_Chemistry:
          return 60
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    case BatteryRegion.China:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 77
        case BatteryChemistry.NMC532_Graphite:
          return 71
        case BatteryChemistry.NMC622_Graphite:
          return 69
        case BatteryChemistry.NMC811_Graphite:
          return 68
        case BatteryChemistry.NCA_Graphite:
          return 72
        case BatteryChemistry.LFP_Graphite:
          return 53.5
        case BatteryChemistry.Other_Chemistry:
          return 77
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    case BatteryRegion.SouthKorea:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 69
        case BatteryChemistry.NMC532_Graphite:
          return 66
        case BatteryChemistry.NMC622_Graphite:
          return 64
        case BatteryChemistry.NMC811_Graphite:
          return 63
        case BatteryChemistry.NCA_Graphite:
          return 67
        case BatteryChemistry.LFP_Graphite:
          return 48
        case BatteryChemistry.Other_Chemistry:
          return 69
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    case BatteryRegion.Japan:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 73
        case BatteryChemistry.NMC532_Graphite:
          return 70
        case BatteryChemistry.NMC622_Graphite:
          return 68
        case BatteryChemistry.NMC811_Graphite:
          return 67
        case BatteryChemistry.NCA_Graphite:
          return 70
        case BatteryChemistry.LFP_Graphite:
          return 52.5
        case BatteryChemistry.Other_Chemistry:
          return 73
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    case BatteryRegion.Other:
      switch (chemistry) {
        case BatteryChemistry.NMC111_Graphite:
          return 77
        case BatteryChemistry.NMC532_Graphite:
          return 71
        case BatteryChemistry.NMC622_Graphite:
          return 69
        case BatteryChemistry.NMC811_Graphite:
          return 68
        case BatteryChemistry.NCA_Graphite:
          return 72
        case BatteryChemistry.LFP_Graphite:
          return 53.5
        case BatteryChemistry.Other_Chemistry:
          return 77
        default: throw new Error(`Unknown chemistry: ${chemistry}`)
      }
    default: throw new Error(`Unknown region: ${region}`)
  }
}