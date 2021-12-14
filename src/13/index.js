const { TransparentPaper } = require('./transparent-paper')
const inputFileReader = require('../input-file-reader')
const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`)

const paper = new TransparentPaper(input)

paper.fold()

const result_part1 = paper.countDots()

console.log({result_part1})

const paper2 = new TransparentPaper(input)

paper2.foldAll()

console.log('result_part2', paper2.draw())

