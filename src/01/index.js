const inputFileReader = require('../input-file-reader')
const sonarMeasurements = require('./sonar-measurements')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)

/**
 * Part 1: How many measurements are larger than the previous measurement?
 */

const part1_result = puzzle.filter((itm, index) => sonarMeasurements.hasIncreased(puzzle[index-1], itm)).length

console.log({ part1_result })