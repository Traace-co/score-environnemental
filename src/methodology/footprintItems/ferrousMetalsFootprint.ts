export function ferrousMetalsFootprint(params: {
  totalMassFerrousMetalsKg: number,
  // 𝐸𝐶𝑠𝑖𝑡𝑒 est l’empreinte carbone de la production d’acier consommé pour la fabrication du véhicule
  // de référence, hors batterie, exprimée en kilogrammes équivalent CO2 (kg-eq CO2), pour le site d’assemblage de la version considéré. Sa détermination tient compte d’un taux de perte 𝑇 en
  // matière acier sur l’ensemble des étapes de transformation et d’assemblage ;
  country: FerrousMetalsCountry
}) {
  const T_PAc = 0.3
  const { totalMassFerrousMetalsKg, country } = params
  const emissionFactorValueKgCO2ePerKg = ferrousMetalsEmissionFactorFromCountryKgCO2ePerKg(country)
  return totalMassFerrousMetalsKg * emissionFactorValueKgCO2ePerKg / (1 - T_PAc)
}

export enum FerrousMetalsCountry {
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

function ferrousMetalsEmissionFactorFromCountryKgCO2ePerKg(country: FerrousMetalsCountry) {
  const emissionFactorFromCountry: Record<FerrousMetalsCountry, number> = {
    [FerrousMetalsCountry.Allemagne]: 1.4,
    [FerrousMetalsCountry.Autriche]: 1.4,
    [FerrousMetalsCountry.Belgique]: 1.3,
    [FerrousMetalsCountry.Brésil]: 1.7,
    [FerrousMetalsCountry.Chine]: 2,
    [FerrousMetalsCountry.Corée_du_Sud]: 1.7,
    [FerrousMetalsCountry.Espagne]: 1.4,
    [FerrousMetalsCountry.États_Unis]: 1.1,
    [FerrousMetalsCountry.Finlande]: 1.4,
    [FerrousMetalsCountry.France]: 1.4,
    [FerrousMetalsCountry.Hongrie]: 1.4,
    [FerrousMetalsCountry.Inde]: 2.1,
    [FerrousMetalsCountry.Indonesie]: 2.2,
    [FerrousMetalsCountry.Italie]: 1.2,
    [FerrousMetalsCountry.Japon]: 1.9,
    [FerrousMetalsCountry.Maroc]: 1.9,
    [FerrousMetalsCountry.Mexique]: 1.3,
    [FerrousMetalsCountry.Pologne]: 1.4,
    [FerrousMetalsCountry.Portugal]: 1.4,
    [FerrousMetalsCountry.République_Tchèque]: 1.4,
    [FerrousMetalsCountry.Royaume_Uni]: 1.5,
    [FerrousMetalsCountry.Slovaquie]: 1.4,
    [FerrousMetalsCountry.Slovenie]: 1.4,
    [FerrousMetalsCountry.Turquie]: 1.4,
    [FerrousMetalsCountry.Vietnam]: 1.9,
    [FerrousMetalsCountry.Europe_Others]: 1.4,
    [FerrousMetalsCountry.America_Others]: 1.3,
    [FerrousMetalsCountry.Others]: 2
  }
  return emissionFactorFromCountry[country]
}  