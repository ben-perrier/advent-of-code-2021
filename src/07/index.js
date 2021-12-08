const fuelConsumption = require('./fuel-consumption')
const inputFileReader = require('../input-file-reader')

const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`).split(',').map(itm => parseInt(itm))

const optimalPosition = fuelConsumption.findOptimalPosition(input)

console.log({ optimalPosition })

const result_part1 = fuelConsumption.fuelCost(input, optimalPosition)

console.log({ result_part1 })