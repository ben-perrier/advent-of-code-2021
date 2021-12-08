const findOptimalPosition = (input) => {
  const max = Math.max(...input)
  const allCosts = new Array(max).fill().map((_, index) => fuelCost(input, index))
  const optimalPosition = allCosts.indexOf(Math.min(...allCosts))
  return optimalPosition
}

const fuelCost = (input, position) => {
  return input.reduce((acc, itm) => acc + Math.abs(itm-position), 0)
}

module.exports = { findOptimalPosition, fuelCost }
