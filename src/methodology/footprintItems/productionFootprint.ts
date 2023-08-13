export function productionFootprint(params: {
  totalMassWithoutBatteryKg: number,
  country: ProductionCountry
}) {
  const { totalMassWithoutBatteryKg, country } = params
  const emissionFactorValueKgCO2ePerKg = productionEmissionFactorFromCountryKgCO2ePerKg(country)
  return totalMassWithoutBatteryKg * emissionFactorValueKgCO2ePerKg
}

export enum ProductionCountry {
  Allemagne = 'Allemagne',
  Autriche = 'Autriche',
  Belgique = 'Belgique',
  Brésil = 'Brésil',
  Chine = 'Chine',
  Corée_du_Sud = 'Corée du Sud',
  Espagne = 'Espagne',
  États_Unis = 'États-Unis',
  Finlande = 'Finlande',
  France = 'France',
  Hongrie = 'Hongrie',
  Inde = 'Inde',
  Indonesie = 'Indonésie',
  Italie = 'Italie',
  Japon = 'Japon',
  Maroc = 'Maroc',
  Mexique = 'Mexique',
  Pologne = 'Pologne',
  Portugal = 'Portugal',
  République_Tchèque = 'République Tchèque',
  Royaume_Uni = 'Royaume-Uni',
  Slovaquie = 'Slovaquie',
  Slovenie = 'Slovénie',
  Turquie = 'Turquie',
  Vietnam = 'Vietnam',
  Europe_Others = 'Europe Others',
  North_America_Others = 'North America Others',
  Other_America_Others = 'Other America Others',
  Africa_Others = 'Africa Others',
  Asia_Others = 'Asia Others',
  Oceania = 'Oceania'
}

function productionEmissionFactorFromCountryKgCO2ePerKg(country: ProductionCountry) {
  const emissionFactorFromCountry: Record<ProductionCountry, number> = {
    [ProductionCountry.Autriche]: 0.7,
    [ProductionCountry.Belgique]: 0.73,
    [ProductionCountry.Brésil]: 0.76,
    [ProductionCountry.Chine]: 1.6,
    [ProductionCountry.République_Tchèque]: 0.94,
    [ProductionCountry.Finlande]: 0.57,
    [ProductionCountry.France]: 0.58,
    [ProductionCountry.Allemagne]: 0.83,
    [ProductionCountry.Hongrie]: 0.74,
    [ProductionCountry.Inde]: 1.82,
    [ProductionCountry.Indonesie]: 1.84,
    [ProductionCountry.Italie]: 0.78,
    [ProductionCountry.Japon]: 1.46,
    [ProductionCountry.Corée_du_Sud]: 1.43,
    [ProductionCountry.Mexique]: 1.18,
    [ProductionCountry.Maroc]: 1.87,
    [ProductionCountry.Pologne]: 1.16,
    [ProductionCountry.Portugal]: 0.72,
    [ProductionCountry.Turquie]: 1.00,
    [ProductionCountry.Slovaquie]: 0.75,
    [ProductionCountry.Slovenie]: 0.72,
    [ProductionCountry.Espagne]: 0.70,
    [ProductionCountry.Royaume_Uni]: 0.75,
    [ProductionCountry.États_Unis]: 1.05,
    [ProductionCountry.Vietnam]: 1.67,
    [ProductionCountry.Africa_Others]: 1.66,
    [ProductionCountry.Asia_Others]: 1.56,
    [ProductionCountry.North_America_Others]: 1.03,
    [ProductionCountry.Other_America_Others]: 0.97,
    [ProductionCountry.Europe_Others]: 0.76,
    [ProductionCountry.Oceania]: 1.67,

  }
  return emissionFactorFromCountry[country]
}  
