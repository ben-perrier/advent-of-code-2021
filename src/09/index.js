const caves = require('./caves')
const inputFileReader = require('../input-file-reader')
const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`)

const result_part1 = caves.lowestPointsTotalRisk(input)

console.log({result_part1})