const polymer = require('./polymer')
const inputFileReader = require('../input-file-reader')
const input = inputFileReader.readFile(`${__dirname}/puzzle.txt`)

const getSortedEntries = (iterations) => {
  const polymers = polymer.insertElements(input, iterations)

  return Object.entries(
    polymers.split('').reduce((acc, itm) => ({...acc, [itm]: acc[itm] ? acc[itm]+1 : 1}), {})
  ).sort((a,b) => b[1]-a[1]) 
}

const result_part1 = getSortedEntries(10)
console.log({result_part1}, 3149-789)


const result_part2 = getSortedEntries(40)
console.log({result_part2})
