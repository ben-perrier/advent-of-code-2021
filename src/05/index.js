const vents = require('./hydrothermal-vents')
const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)
const result_part1 = vents.modelise(puzzle).countOverlaps(2)

console.log({ result_part1 })
