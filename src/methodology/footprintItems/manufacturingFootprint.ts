// Transformations intermédiaires et assemblage
export function manufacturingFootprint(params: {
  totalMassWithoutBatteryKg: number,
  country: ManufacturingCountry
}) {
  const { totalMassWithoutBatteryKg, country } = params
  const emissionFactorValueKgCO2ePerKg = productionEmissionFactorFromCountryKgCO2ePerKg(country)
  return totalMassWithoutBatteryKg * emissionFactorValueKgCO2ePerKg
}

export enum ManufacturingCountry {
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

function productionEmissionFactorFromCountryKgCO2ePerKg(country: ManufacturingCountry) {
  const emissionFactorFromCountry: Record<ManufacturingCountry, number> = {
    [ManufacturingCountry.Allemagne]: 0.83,
    [ManufacturingCountry.Autriche]: 0.7,
    [ManufacturingCountry.Belgique]: 0.73,
    [ManufacturingCountry.Brésil]: 0.76,
    [ManufacturingCountry.Chine]: 1.6,
    [ManufacturingCountry.Corée_du_Sud]: 1.43,
    [ManufacturingCountry.Espagne]: 0.70,
    [ManufacturingCountry.États_Unis]: 1.05,
    [ManufacturingCountry.Finlande]: 0.57,
    [ManufacturingCountry.France]: 0.58,
    [ManufacturingCountry.Hongrie]: 0.74,
    [ManufacturingCountry.Inde]: 1.82,
    [ManufacturingCountry.Indonesie]: 1.84,
    [ManufacturingCountry.Italie]: 0.78,
    [ManufacturingCountry.Japon]: 1.46,
    [ManufacturingCountry.Mexique]: 1.18,
    [ManufacturingCountry.Maroc]: 1.87,
    [ManufacturingCountry.Pologne]: 1.16,
    [ManufacturingCountry.Portugal]: 0.72,
    [ManufacturingCountry.République_Tchèque]: 0.94,
    [ManufacturingCountry.Royaume_Uni]: 0.75,
    [ManufacturingCountry.Slovaquie]: 0.75,
    [ManufacturingCountry.Slovenie]: 0.72,
    [ManufacturingCountry.Turquie]: 1.00,
    [ManufacturingCountry.Vietnam]: 1.67,
    [ManufacturingCountry.Africa_Others]: 1.66,
    [ManufacturingCountry.Asia_Others]: 1.56,
    [ManufacturingCountry.North_America_Others]: 1.03,
    [ManufacturingCountry.Other_America_Others]: 0.97,
    [ManufacturingCountry.Europe_Others]: 0.76,
    [ManufacturingCountry.Oceania]: 1.67,

  }
  return emissionFactorFromCountry[country]
}  
