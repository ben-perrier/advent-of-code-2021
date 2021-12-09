const sevenSegments = require('./seven-segments')
const inputFileReader = require('../input-file-reader')

const input = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)

const result_part1 = sevenSegments.findPatternsAfterSeparator(input)

console.log({result_part1})

const result_part2 = input.map(row => 
  new sevenSegments.PatternDecoder(row).resolvePatterns().decodeOutput()
)
.reduce((acc, itm) => acc+itm, 0)

console.log({ result_part2 })