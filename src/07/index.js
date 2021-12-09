const fuelConsumption = require('./fuel-consumption')
const inputFileReader = require('../input-file-reader')

const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`).split(',').map(itm => parseInt(itm))

const optimalPosition1 = fuelConsumption.findOptimalPosition(input)

const result_part1 = fuelConsumption.fuelCost(input, optimalPosition1)

console.log({ result_part1 })

const optimalPosition2 = fuelConsumption.findOptimalPosition(input, true)

const result_part2 = fuelConsumption.fuelCost(input, optimalPosition2)

// 363044 too low

console.log({ result_part2 })