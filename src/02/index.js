const { SubmarinePosition, SubmarinePosition2 } = require('./submarine-position')

const inputFileReader = require('../input-file-reader')

const puzzle = inputFileReader.splitFileByRow(`${__dirname}/puzzle.txt`)


/**
 * Part 1: Calculate the horizontal position and depth you would have after following the planned course. 
 * What do you get if you multiply your final horizontal position by your final depth?
 */

const submarinePosition1 = new SubmarinePosition().processCommands(puzzle)

const part1_result = submarinePosition1.currentPosition()

console.log({ ...part1_result,  response: part1_result.position * part1_result.depth })

/**
 * Part 2: Calculate the horizontal position and depth you would have after following the planned course. 
 * What do you get if you multiply your final horizontal position by your final depth?
 */

 const submarinePosition2 = new SubmarinePosition2().processCommands(puzzle)

 const part2_result = submarinePosition2.currentPosition()
 
 console.log({ ...part2_result,  response: part2_result.position * part2_result.depth })