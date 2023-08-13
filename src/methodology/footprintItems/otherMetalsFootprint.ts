
export enum OtherMetalsRegion {
  Europe = 'Europe',
  Others = 'Autre'
}

export function otherMetalsFootprint(params: {
  totalMassOtherThanSteelOrAluminiumKg: number,
  region: OtherMetalsRegion
}) {
  const { totalMassOtherThanSteelOrAluminiumKg, region} = params
  let emissionFactorValueKgCO2ePerKg: number
  switch (region) {
    case OtherMetalsRegion.Europe:
      emissionFactorValueKgCO2ePerKg = 4.6
      break
    case OtherMetalsRegion.Others:
      emissionFactorValueKgCO2ePerKg = 5
      break
  }
  return totalMassOtherThanSteelOrAluminiumKg * emissionFactorValueKgCO2ePerKg
}
