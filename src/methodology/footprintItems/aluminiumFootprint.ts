export function aluminiumFootprint(params: {
  totalMassAluminiumKg: number,
  // 𝐸𝐶𝑠𝑖𝑡𝑒 est l’empreinte carbone de la production d’aluminium consommé pour la fabrication
  // du véhicule de référence, hors batterie, exprimée en kilogrammes équivalent CO2 (kg-eq CO2),
  // pour le site d’assemblage de la version considéré. Sa détermination tient compte d’un taux de perte
  // 𝑇 en matière aluminium sur l’ensemble des étapes de transformation et d’assemblage
  region: AluminiumRegion
}) {
  const T_PAl = 0.3
  const { totalMassAluminiumKg, region } = params
  const emissionFactorValueKgCO2ePerKg = aluminiumEmissionFactorFromRegionKgCO2ePerKg(region)
  return totalMassAluminiumKg * emissionFactorValueKgCO2ePerKg / (1 - T_PAl)
}

export enum AluminiumRegion {
  NorthAmerica = 'Amérique du Nord',
  SouthAmerica = 'Amérique du Sud',
  Europe = 'Europe',
  China = 'Chine',
  Japan = 'Japon',
  Gulf = 'Conseil de Coopération du Golfe',
  Others = 'Autre'
}

function aluminiumEmissionFactorFromRegionKgCO2ePerKg(region: AluminiumRegion) {
  switch (region) {
    case AluminiumRegion.NorthAmerica:
      return 8.5
    case AluminiumRegion.SouthAmerica:
      return 13.9
    case AluminiumRegion.Europe:
      return 8.6
    case AluminiumRegion.China:
      return 20
    case AluminiumRegion.Japan:
      return 12.6
    case AluminiumRegion.Gulf:
      return 11.4
    case AluminiumRegion.Others:
      return 18.5
  }
}