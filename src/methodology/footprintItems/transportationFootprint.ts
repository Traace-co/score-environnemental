export interface TransportationSettings {
  distanceKm: number
  region: TransportationRegion
  mode: TransportationMode
}

export function transportationFootprint(params: {
  massWithoutDriverKg: number,
  transportationSettings: TransportationSettings[]
}) {
  const { massWithoutDriverKg, transportationSettings } = params
  return massWithoutDriverKg / 1000 *
    transportationSettings.reduce((sum, { distanceKm, region, mode }) => sum + distanceKm * transportationEmissionFactorKgCO2ePerTonKm({
      region,
      mode
    }), 0)
}

export enum TransportationMode {
  Sea = 'Mer',
  River = 'Fluvial',
  Air = 'Aérien',
  Road = 'Route',
  Train = 'Train',
}

export enum TransportationRegion {
  Africa = 'Afrique',
  Asia = 'Asie',
  Europe_Without_France = 'Europe (hors France)',
  France = 'France',
  America = 'Amerique',
  Oceania = 'Océanie',
}

function transportationEmissionFactorKgCO2ePerTonKm(params: { region: TransportationRegion, mode: TransportationMode }) {
  const { region, mode } = params
  switch (mode) {
    case TransportationMode.Sea:
      return 0.101
    case TransportationMode.River:
      return 0.010
    case TransportationMode.Air:
      return 1.21
    case TransportationMode.Road:
      switch (region) {
        case TransportationRegion.Africa:
          return 0.414
        case TransportationRegion.America:
          return 0.318
        case TransportationRegion.Asia:
          return 0.377
        case TransportationRegion.Europe_Without_France:
          return 0.256
        case TransportationRegion.France:
          return 0.208
        case TransportationRegion.Oceania:
          return 0.386
        default: throw new Error(`Unknown transportation region ${region}`)
      }
    case TransportationMode.Train:
      switch (region) {
        case TransportationRegion.Africa:
          return 0.045
        case TransportationRegion.Asia:
          return 0.041
        case TransportationRegion.Europe_Without_France:
          return 0.023
        case TransportationRegion.France:
          return 0.010
        case TransportationRegion.Oceania:
          return 0.038
        default: throw new Error(`Unknown transportation region ${region}`)
      }
    default: throw new Error(`Unknown transportation mode ${mode}`)
  }
}
