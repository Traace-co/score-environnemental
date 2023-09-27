import { AluminiumRegion } from "./footprintItems/aluminiumFootprint"
import { BatteryRegion } from "./footprintItems/batteryFootprint"
import { FerrousMetalsCountry } from "./footprintItems/ferrousMetalsFootprint"
import { ManufacturingCountry } from "./footprintItems/manufacturingFootprint"
import { OtherMaterialsRegion } from "./footprintItems/otherMaterialsFootprint"
import { TransportationRegion } from "./footprintItems/transportationFootprint"

export interface EnvironmentalScoreCountry {
  id: string
  name: string
  emoji: string,
  ferrousMetalsCountry: FerrousMetalsCountry
  aluminiumRegion: AluminiumRegion
  manufacturingCountry: ManufacturingCountry
  otherMaterialsRegion: OtherMaterialsRegion
  transportationRegion: TransportationRegion
  batteryRegion: BatteryRegion
}
export const allEnvironmentalScoreCountries: EnvironmentalScoreCountry[] = [
  {
    id: 'us',
    name: 'USA',
    emoji: '🇺🇸',
    ferrousMetalsCountry: FerrousMetalsCountry.États_Unis,
    aluminiumRegion: AluminiumRegion.NorthAmerica,
    manufacturingCountry: ManufacturingCountry.États_Unis,
    otherMaterialsRegion: OtherMaterialsRegion.Others,
    transportationRegion: TransportationRegion.America,
    batteryRegion: BatteryRegion.USA
  },
  {
    id: 'fr',
    name: 'France',
    emoji: '🇫🇷',
    ferrousMetalsCountry: FerrousMetalsCountry.France,
    aluminiumRegion: AluminiumRegion.Europe,
    manufacturingCountry: ManufacturingCountry.France,
    otherMaterialsRegion: OtherMaterialsRegion.Europe,
    transportationRegion: TransportationRegion.France,
    batteryRegion: BatteryRegion.Europe
  },
  {
    id: 'de',
    name: 'Germany',
    emoji: '🇩🇪',
    ferrousMetalsCountry: FerrousMetalsCountry.Allemagne,
    aluminiumRegion: AluminiumRegion.Europe,
    manufacturingCountry: ManufacturingCountry.Allemagne,
    otherMaterialsRegion: OtherMaterialsRegion.Europe,
    transportationRegion: TransportationRegion.Europe_Without_France,
    batteryRegion: BatteryRegion.Europe
  },
  {
    id: 'cn',
    name: 'China',
    emoji: '🇨🇳',
    ferrousMetalsCountry: FerrousMetalsCountry.Chine,
    aluminiumRegion: AluminiumRegion.China,
    manufacturingCountry: ManufacturingCountry.Chine,
    otherMaterialsRegion: OtherMaterialsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.China
  },
  {
    id: 'in',
    name: 'India',
    emoji: '🇮🇳',
    ferrousMetalsCountry: FerrousMetalsCountry.Inde,
    aluminiumRegion: AluminiumRegion.Others,
    manufacturingCountry: ManufacturingCountry.Inde,
    otherMaterialsRegion: OtherMaterialsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.Other
  },
  {
    id: 'kr',
    name: 'South Korea',
    emoji: '🇰🇷',
    ferrousMetalsCountry: FerrousMetalsCountry.Corée_du_Sud,
    aluminiumRegion: AluminiumRegion.Others,
    manufacturingCountry: ManufacturingCountry.Corée_du_Sud,
    otherMaterialsRegion: OtherMaterialsRegion.Others,
    transportationRegion: TransportationRegion.Asia,
    batteryRegion: BatteryRegion.SouthKorea
  }
]