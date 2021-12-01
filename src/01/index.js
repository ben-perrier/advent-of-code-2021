const inputFileReader = require('../input-file-reader')
const sonarMeasurements = require('./sonar-measurements')

const puzzle = inputFileReader
.splitFileByRow(`${__dirname}/puzzle.txt`)
// Format strings to numbers
.map((itm) => +itm)

/**
 * Part 1: How many measurements are larger than the previous measurement?
 */

const part1_result = sonarMeasurements.countIncreases(puzzle)

console.log({ part1_result })

/**
 * Part 2: How many sums are larger than the previous sum?
 */

 const part2_result = sonarMeasurements.countSlidingWindowIncreases(puzzle, 3)

 console.log({ part2_result })
