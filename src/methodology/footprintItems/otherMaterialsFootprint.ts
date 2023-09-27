
// Matériaux autres que les métaux ferreux et l’aluminium (pur et allié), hors batterie
export enum OtherMaterialsRegion {
  Europe = 'Europe',
  Others = 'Autre'
}

export function otherMaterialsFootprint(params: {
  totalMassOtherThanFerrousMetalsOrAluminiumKg: number,
  region: OtherMaterialsRegion
}) {
  const { totalMassOtherThanFerrousMetalsOrAluminiumKg, region} = params
  let emissionFactorValueKgCO2ePerKg: number
  switch (region) {
    case OtherMaterialsRegion.Europe:
      emissionFactorValueKgCO2ePerKg = 4.6
      break
    case OtherMaterialsRegion.Others:
      emissionFactorValueKgCO2ePerKg = 5
      break
  }
  return totalMassOtherThanFerrousMetalsOrAluminiumKg * emissionFactorValueKgCO2ePerKg
}
