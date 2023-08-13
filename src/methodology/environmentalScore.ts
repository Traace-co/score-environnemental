export function environmentalScore(params: { ECversion: number, isLargeCar: boolean }): number {
  const { ECversion, isLargeCar } = params
  const Nec = 80
  if (isLargeCar) {
    const EChaut2 = 29000
    const ECbas2 = 10000
    if (ECversion >= EChaut2) {
      return 0
    }
    if (ECversion <= ECbas2) {
      return Nec
    }
    return Nec * (EChaut2 - ECversion) / (EChaut2 - ECbas2)
  } else {
    const EChaut1 = 15000
    const ECbas1 = 7000
    if (ECversion >= EChaut1) {
      return 0
    }
    if (ECversion <= ECbas1) {
      return Nec
    }
    return Nec * (EChaut1 - ECversion) / (EChaut1 - ECbas1)

  }
}