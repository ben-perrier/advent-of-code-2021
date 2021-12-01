/**
 * Returns whether the current sonar measurement has increase since the last
 * @param {number|undefined} lastMeasurement - last sonar measurement - optional
 * @param {number} currentMeasurement - current sonar measurement - optional
 */
const hasIncreased = (lastMeasurement, currentMeasurement) => 
  lastMeasurement ? currentMeasurement - lastMeasurement > 0 : false

module.exports = { hasIncreased }