const vents = require('./hydrothermal-vents')
const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)
const result_part1 = vents.modelise(puzzle, true).countOverlaps(2)

console.log({ result_part1 })

const result_part2 = vents.modelise(puzzle, false).countOverlaps(2)

console.log({ result_part2 })
