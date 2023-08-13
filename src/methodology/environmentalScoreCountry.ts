import { AluminiumRegion } from "./footprintItems/aluminiumFootprint"
import { BatteryRegion } from "./footprintItems/batteryFootprint"
import { OtherMetalsRegion } from "./footprintItems/otherMetalsFootprint"
import { ProductionCountry } from "./footprintItems/productionFootprint"
import { SteelCountry } from "./footprintItems/steelFootprint"
import { TransportationRegion } from "./footprintItems/transportationFootprint"

export interface EnvironmentalScoreCountry {
  id: string
  name: string
  emoji: string,
  steelCountry: SteelCountry
  aluminiumRegion: AluminiumRegion
  productionCountry: ProductionCountry
  otherMetalsRegion: OtherMetalsRegion
  transportationRegion: TransportationRegion
  batteryRegion: BatteryRegion
}
export const allEnvironmentalScoreCountries: EnvironmentalScoreCountry[] = [
  {
    id: 'us',
    name: 'USA',
    emoji: '🇺🇸',
    steelCountry: SteelCountry.États_Unis,
    aluminiumRegion: AluminiumRegion.NorthAmerica,
    productionCountry: ProductionCountry.États_Unis,
    otherMetalsRegion: OtherMetalsRegion.Others,
    transportationRegion: TransportationRegion.America,
    batteryRegion: BatteryRegion.USA
  },
  {
    id: 'fr',
    name: 'France',
    emoji: '🇫🇷',
    steelCountry: SteelCountry.France,
    aluminiumRegion: AluminiumRegion.Europe,
    productionCountry: ProductionCountry.France,
    otherMetalsRegion: OtherMetalsRegion.Europe,
    transportationRegion: TransportationRegion.France,
    batteryRegion: BatteryRegion.Europe
  },
  {
    id: 'de',
    name: 'Germany',
    emoji: '🇩🇪',
    steelCountry: SteelCountry.Allemagne,
    aluminiumRegion: AluminiumRegion.Europe,
    productionCountry: ProductionCountry.Allemagne,
    otherMetalsRegion: OtherMetalsRegion.Europe,
    transportationRegion: TransportationRegion.Europe_Without_France,
    batteryRegion: BatteryRegion.Europe
  },
  {
    id: 'cn',
    name: 'China',
    emoji: '🇨🇳',
    steelCountry: SteelCountry.Chine,
    aluminiumRegion: AluminiumRegion.China,
    productionCountry: ProductionCountry.Chine,
    otherMetalsRegion: OtherMetalsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.China
  },
  {
    id: 'in',
    name: 'India',
    emoji: '🇮🇳',
    steelCountry: SteelCountry.Inde,
    aluminiumRegion: AluminiumRegion.Others,
    productionCountry: ProductionCountry.Inde,
    otherMetalsRegion: OtherMetalsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.Other
  },
  {
    id: 'kr',
    name: 'South Korea',
    emoji: '🇰🇷',
    steelCountry: SteelCountry.Corée_du_Sud,
    aluminiumRegion: AluminiumRegion.Others,
    productionCountry: ProductionCountry.Corée_du_Sud,
    otherMetalsRegion: OtherMetalsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.SouthKorea
  }
]