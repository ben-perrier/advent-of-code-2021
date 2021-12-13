const lowestPointsTotalRisk = (input) => {
  const grid = input.split('\n').map(row => row.split('').map(itm => parseInt(itm)))
  return lowPoints(grid).reduce((acc, { risk }) => acc+risk , 0)
}

/**
 * Returns the list of lowest points
 * @param {number[][]} grid: array of arrays of numbers
 */
const lowPoints = (grid) => {
  /**
   * Returns whether the current point is a low point
   * @param {number} height: height at point
   * @param {number} xIndex: x coordinate
   * @param {number} yIndex: y coordinate
   */
   const isLowPoint = (height, xIndex, yIndex) => {

    if (height >= getPoint(grid, xIndex-1, yIndex).height) return false
    if (height >= getPoint(grid, xIndex, yIndex-1).height) return false
    if (height >= getPoint(grid, xIndex+1, yIndex).height) return false
    if (height >= getPoint(grid, xIndex, yIndex+1).height) return false
    return true
  }

  /**
   * Returns risk level
   * @param {number} height: height at point
   */
  const riskLevel = (height) => height + 1

  return grid.map((row, xIndex) => 
    row.map((height, yIndex) => {
      if (!isLowPoint(height, xIndex, yIndex)) return
      return {
        height,
        x: xIndex,
        y: yIndex,
        risk: riskLevel(height)
      }
    })
  ).flat().filter(itm => itm)
}

const largestBasinsSizes = (input, numberOfBasins) => {
  const grid = input.split('\n').map(row => row.split('').map(itm => parseInt(itm)))
  const lowestPoints = lowPoints(grid)

  const adjacentPoints = ({ x, y }) => ([
    getPoint(grid, x-1, y),
    getPoint(grid, x, y-1),
    getPoint(grid, x+1, y),
    getPoint(grid, x, y+1)
  ])

  const basinSize = (lowPoint) => {
    const pointToCoordinates = ({ x, y }) => JSON.stringify({ x, y })
    const coordinatesToPoint = (coordinates) => JSON.parse(coordinates)
    
    let size = 0
    
    const pointsToInvestigate = new Set([pointToCoordinates(lowPoint)])

    for (const point of pointsToInvestigate.values()) {
      adjacentPoints(coordinatesToPoint(point))
      .filter(({ height }) => height < 9)
      .forEach(({ x, y }) => pointsToInvestigate.add(pointToCoordinates({ x, y })))
      ++size
    }

    return size
  }

  return lowestPoints
  .map((lowPoint) => basinSize(lowPoint))
  .sort((a,b) => b-a)
  .slice(0, numberOfBasins)
  .reduce((acc, itm) => acc * itm, 1)  
}

/**
 * Returns height at point or unfeasibly high value if off grid
 * @param {number} x: x coordinate
 * @param {number} y: y coordinate
 * @returns Point
 */
const getPoint = (grid, x, y) => {
  const height = ((grid[x] || []) [y])
  return {
    height: height === undefined ? 9 : height,
    x,
    y
  }
}

module.exports = { lowestPointsTotalRisk, largestBasinsSizes }