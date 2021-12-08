const findPatternsAfterSeparator = (puzzle) => {
  const input = puzzle.map(row => row.split('| ')[1].split(' ')).flat()
  return input.filter(itm => is1(itm) || is4(itm) || is7(itm) || is8(itm)).length
}

const is1 = (pattern) => pattern.length === 2

const is4 = (pattern) => pattern.length === 4

const is7 = (pattern) => pattern.length === 3

const is8 = (pattern) => pattern.length === 7

module.exports = { is1, is4, is7, is8, findPatternsAfterSeparator }