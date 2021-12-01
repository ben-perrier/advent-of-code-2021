/**
 * Returns whether the current sonar measurement has increase since the last
 * @param {number|undefined} lastMeasurement - last sonar measurement - optional
 * @param {number} currentMeasurement - current sonar measurement - optional
 */
const hasIncreased = (lastMeasurement, currentMeasurement) => 
  lastMeasurement ? currentMeasurement - lastMeasurement > 0 : false

/**
 * Counts increases in a collection of measurements
 * @param {numbers[]} measurements: List of all measurements 
 */
const countIncreases = (measurements) => measurements.filter((itm, index) => hasIncreased(measurements[index-1], itm)).length

/**
 * Counts increases in a collection of measurements
 * @param {numbers[]} measurements: List of all measurements 
 * @param {number} windowLength: Size of the window
 */
const countSlidingWindowIncreases = (measurements, windowLength) => {
  const windowSums = new Array(measurements.length - windowLength + 1).fill()
  .map((_, index) => 
    measurements
    .slice(index, windowLength+index)
    .reduce((acc, itm) => acc + itm, 0)
  )
  return countIncreases(windowSums)
}

module.exports = { hasIncreased, countIncreases, countSlidingWindowIncreases }