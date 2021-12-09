const lowestPointsTotalRisk = (input) => {
  const grid = input.split('\n').map(row => row.split('').map(itm => parseInt(itm)))

  /**
   * Returns whether the current point is a low point
   * @param {number} height: height at point
   * @param {number} xIndex: x coordinate
   * @param {number} yIndex: y coordinate
   */
  const isLowPoint = (height, xIndex, yIndex) => {
    
    /**
     * Returns height at point or unfeasibly high value if off grid
     * @param {number} x: x coordinate
     * @param {number} y: y coordinate
     */
    const getPoint = (x, y) => {
      const height = ((grid[x] || []) [y])
      return height === undefined ? 10 : height
    }

    if (height >= getPoint(xIndex-1, yIndex)) return false
    if (height >= getPoint(xIndex, yIndex-1)) return false
    if (height >= getPoint(xIndex+1, yIndex)) return false
    if (height >= getPoint(xIndex, yIndex+1)) return false
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
      return riskLevel(height)
    })
  ).flat().filter(itm => itm)
  .reduce((acc, itm) => acc+itm , 0)
}

module.exports = { lowestPointsTotalRisk }