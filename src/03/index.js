const diagnosticsReports = require('./diagnostics-reports')
const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)

const gammaRate = diagnosticsReports.gammaRate(puzzle)
const epsilonRate = diagnosticsReports.epsilonRate(gammaRate)

const gammaRateDecimal = parseInt(gammaRate, 2)
const epsilonRateDecimal = parseInt(epsilonRate, 2)

const part1_result = gammaRateDecimal * epsilonRateDecimal
console.log({ part1_result })

const c02ScrubberRating = diagnosticsReports.c02ScrubberRating(puzzle)
const oxygenGeneratorRating = diagnosticsReports.oxygenGeneratorRating(puzzle)

const c02ScrubberRatingDecimal = parseInt(c02ScrubberRating, 2)
const oxygenGeneratorDecimal = parseInt(oxygenGeneratorRating, 2)

const part2_result = c02ScrubberRatingDecimal * oxygenGeneratorDecimal
console.log({ part2_result })