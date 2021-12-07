const bingo = require('./bingo')
const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.readFile(`${__dirname}/puzzle.txt`)

const part1_result = bingo.playToWin(puzzle)

const part2_result = bingo.playToLose(puzzle)

console.log({ part1_result, part2_result })
