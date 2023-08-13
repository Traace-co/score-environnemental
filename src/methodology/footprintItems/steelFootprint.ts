export function steelFootprint(params: {
  totalMassSteelKg: number,
  // 𝐸𝐶𝑠𝑖𝑡𝑒 est l’empreinte carbone de la production d’acier consommé pour la fabrication du véhicule
  // de référence, hors batterie, exprimée en kilogrammes équivalent CO2 (kg-eq CO2), pour le site d’assemblage de la version considéré. Sa détermination tient compte d’un taux de perte 𝑇 en
  // matière acier sur l’ensemble des étapes de transformation et d’assemblage ;
  country: SteelCountry
}) {
  const T_PAc = 0.3
  const { totalMassSteelKg, country } = params
  const emissionFactorValueKgCO2ePerKg = steelEmissionFactorFromCountryKgCO2ePerKg(country)
  return totalMassSteelKg * emissionFactorValueKgCO2ePerKg / (1 - T_PAc)
}

export enum SteelCountry {
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
  America_Others = 'America Others',
  Others = 'Others'
}

function steelEmissionFactorFromCountryKgCO2ePerKg(country: SteelCountry) {
  const emissionFactorFromCountry: Record<SteelCountry, number> = {
    [SteelCountry.Allemagne]: 1.4,
    [SteelCountry.Autriche]: 1.4,
    [SteelCountry.Belgique]: 1.3,
    [SteelCountry.Brésil]: 1.7,
    [SteelCountry.Chine]: 2,
    [SteelCountry.Corée_du_Sud]: 1.7,
    [SteelCountry.Espagne]: 1.4,
    [SteelCountry.États_Unis]: 1.1,
    [SteelCountry.Finlande]: 1.4,
    [SteelCountry.France]: 1.4,
    [SteelCountry.Hongrie]: 1.4,
    [SteelCountry.Inde]: 2.1,
    [SteelCountry.Indonesie]: 2.2,
    [SteelCountry.Italie]: 1.2,
    [SteelCountry.Japon]: 1.9,
    [SteelCountry.Maroc]: 1.9,
    [SteelCountry.Mexique]: 1.3,
    [SteelCountry.Pologne]: 1.4,
    [SteelCountry.Portugal]: 1.4,
    [SteelCountry.République_Tchèque]: 1.4,
    [SteelCountry.Royaume_Uni]: 1.5,
    [SteelCountry.Slovaquie]: 1.4,
    [SteelCountry.Slovenie]: 1.4,
    [SteelCountry.Turquie]: 1.4,
    [SteelCountry.Vietnam]: 1.9,
    [SteelCountry.Europe_Others]: 1.4,
    [SteelCountry.America_Others]: 1.3,
    [SteelCountry.Others]: 2
  }
  return emissionFactorFromCountry[country]
}  