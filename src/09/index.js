const caves = require('./caves')
const inputFileReader = require('../input-file-reader')
const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`)

const result_part1 = caves.lowestPointsTotalRisk(input)

console.log({result_part1})

const result_part2 = caves.largestBasinsSizes(input, 3)

console.log({result_part2})
