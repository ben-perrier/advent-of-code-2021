const { SubmarinePosition } = require('./submarine-position')

const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)

const submarinePosition = new SubmarinePosition().processCommands(puzzle)

/**
 * Part 1: Calculate the horizontal position and depth you would have after following the planned course. 
 * What do you get if you multiply your final horizontal position by your final depth?
 */

const part1_result = submarinePosition.currentPosition()

const { position, depth } = part1_result

console.log({ position, depth, response: position * depth })

