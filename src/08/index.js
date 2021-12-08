const sevenSegments = require('./seven-segments')
const inputFileReader = require('../input-file-reader')

const input = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)
const result_part1 = sevenSegments.findPatternsAfterSeparator(input)

console.log({result_part1})