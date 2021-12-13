/**
 * Returns the position optimising fuel cost should all crabs move there
 * @param {number[]} input: crabs' positions
 * @param {boolean} withCrabEngineering: turns on `crab engineering` for calculating fuel cost
 */
const findOptimalPosition = (input, withCrabEngineering) => {
  const max = Math.max(...input)
  const allCosts = new Array(max).fill().map((_, index) => fuelCost(input, index, withCrabEngineering))
  const optimalPosition = allCosts.indexOf(Math.min(...allCosts))
  return optimalPosition
}

/**
 * Returns the cost of moving from all positions in input to a position
 * @param {number[]} input: crabs' positions
 * @param {number} position: position where they are moving
 * @param {boolean} withCrabEngineering: whether to use costOfMoving calculation method with crab engineering
 */
const fuelCost = (input, position, withCrabEngineering) => {
  const costCalc = withCrabEngineering ? costOfMovingWithCrabEngineering : costOfMoving
  return input.reduce((acc, itm) => acc + costCalc(itm, position), 0)
}

/**
 * Returns the cost of moving from one position to another with crab engineering
 * @param {number} fromPosition: from position
 * @param {number} toPosition: to position
 */
const costOfMovingWithCrabEngineering = (fromPosition, toPosition) => 
  new Array(Math.abs(fromPosition - toPosition)).fill().reduce((acc, _, index) => acc + index + 1, 0)

/**
 * Returns the cost of moving from one position to another
 * @param {number} fromPosition: from position
 * @param {number} toPosition: to position
 */
const costOfMoving = (fromPosition, toPosition) => 
  Math.abs(fromPosition-toPosition)


module.exports = { findOptimalPosition, fuelCost, costOfMovingWithCrabEngineering, costOfMoving }
