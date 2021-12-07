const gammaRate = (rowBinaries) => {
  const verticalSlices = transposeBinaryArray(rowBinaries)
  const mostCommons = verticalSlices.map(mostCommon)
  return mostCommons.join('')
}

/**
 * Gives the most common binary in an array of single binaries
 * @param {binary[]} array: array of single binaries
 */
const mostCommon = (array) => {
  const tally = tallyBites(array)
  if (tally['0'] === tally['1']) return
  return tally['0'] > tally['1'] ? '0' : '1'
}

/**
 * Reorganises array of binary strings by index
 * @param {binary[]} array 
 * @returns 
 */
const transposeBinaryArray = (rowBinaries) => rowBinaries[0].split('')
.map((_, index) => rowBinaries.map((row) => row[index]))

/**
 * Counts the occurrences of each binaries in an array of single binaries
 * @param {binary[]} array:
 * @returns {object} counts for 0 and 1
 */
const tallyBites = (array) => array.reduce((acc, itm) => ({ ...acc, [itm]: acc[itm] ? ++acc[itm] : 1 }), {})

const epsilonRate = (gammaRate) => 
gammaRate.split('')
.map(itm => itm === '0' ? '1' : '0')
.join('')

/**
 * OxygenGeneratorRating
  -  Start with all 12 numbers and consider only the first bit of each number. There are more 1 bits (7) than 0 bits (5), so keep only the 7 numbers with a 1 in the first position: 11110, 10110, 10111, 10101, 11100, 10000, and 11001.
  -  Then, consider the second bit of the 7 remaining numbers: there are more 0 bits (4) than 1 bits (3), so keep only the 4 numbers with a 0 in the second position: 10110, 10111, 10101, and 10000.
  -  In the third position, three of the four numbers have a 1, so keep those three: 10110, 10111, and 10101.
  -  In the fourth position, two of the three numbers have a 1, so keep those two: 10110 and 10111.
  -  In the fifth position, there are an equal number of 0 bits and 1 bits (one each). So, to find the oxygen generator rating, keep the number with a 1 in that position: 10111.
  -  As there is only one number left, stop; the oxygen generator rating is 10111, or 23 in decimal.
 */
const oxygenGeneratorRating = (rowBinaries) => {
  let array = [...rowBinaries]
  let regex = '^'
  for (let index = 0; index < rowBinaries.length; index++) {
    const vertical = transposeBinaryArray(array)
    const mostCommonBinary = mostCommon(vertical[index])
    regex = `${regex}[${mostCommonBinary ? mostCommonBinary : `1`}]`
    array = array.filter(itm => {
      return new RegExp(regex).test(itm)
    })
    if (array.length === 1) return array[0]
  }
}


/**
 * c02ScrubberRating
  -  Start again with all 12 numbers and consider only the first bit of each number. There are fewer 0 bits (5) than 1 bits (7), so keep only the 5 numbers with a 0 in the first position: 00100, 01111, 00111, 00010, and 01010.
  -  Then, consider the second bit of the 5 remaining numbers: there are fewer 1 bits (2) than 0 bits (3), so keep only the 2 numbers with a 1 in the second position: 01111 and 01010.
  -  In the third position, there are an equal number of 0 bits and 1 bits (one each). So, to find the CO2 scrubber rating, keep the number with a 0 in that position: 01010.
  -  As there is only one number left, stop; the CO2 scrubber rating is 01010, or 10 in decimal.
 */
const c02ScrubberRating = (rowBinaries) => {
  let array = [...rowBinaries]
  let regex = '^'
  for (let index = 0; index < rowBinaries.length; index++) {
    const vertical = transposeBinaryArray(array)
    const mostCommonBinary = mostCommon(vertical[index])
    const leastCommon = mostCommonBinary === '0' ? '1' : '0'
    regex = `${regex}[${leastCommon}]`
    array = array.filter(itm => {
      return new RegExp(regex).test(itm)
    })
    if (array.length === 1) return array[0]
  }
}

module.exports = { gammaRate, epsilonRate, oxygenGeneratorRating, c02ScrubberRating }