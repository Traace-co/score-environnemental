export function environmentalScore(params: { ECversion: number, isLargeCar: boolean }): number {
  const { ECversion, isLargeCar } = params
  const Nec = 80
  if (isLargeCar) {
    const EChaut2 = 21000
    const ECbas2 = 12000
    if (ECversion >= EChaut2) {
      return 0
    }
    if (ECversion <= ECbas2) {
      return Nec
    }
    return Nec * (EChaut2 - ECversion) / (EChaut2 - ECbas2)
  } else {
    const EChaut1 = 17000
    const ECbas1 = 6000
    if (ECversion >= EChaut1) {
      return 0
    }
    if (ECversion <= ECbas1) {
      return Nec
    }
    return Nec * (EChaut1 - ECversion) / (EChaut1 - ECbas1)

  }
}