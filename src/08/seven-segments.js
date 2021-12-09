const findPatternsAfterSeparator = (puzzle) => {
  const input = puzzle.map(row => row.split('| ')[1].split(' ')).flat()
  return input.filter(itm => is1(itm) || is4(itm) || is7(itm) || is8(itm)).length
}

const is1 = (pattern) => pattern.length === 2

const is4 = (pattern) => pattern.length === 4

const is7 = (pattern) => pattern.length === 3

const is8 = (pattern) => pattern.length === 7

class PatternDecoder {
  
  constructor (line) {
    const [input, output] = line.split(' | ')
    this.input = input.split(' ')
    // Sort output pattern letters in alpha order
    this.output = output.split(' ').map(itm => itm.split('').sort().join(''))
    this.patterns = {}
  }

  /**
   * Moves a pattern from the unmatched patterns to the decoded patterns
   */
  resolvePattern (pattern, number) {
    const index = this.input.indexOf(pattern);
    if (index !== -1) this.patterns[number] = this.input.splice(index, 1)[0]
  }

  resolvePatterns () {
    // Resolve patterns 1, 4, 7 and 8 based on their size (part1)
    this.resolvePattern(this.input.find(itm => is1(itm)), 1)
    this.resolvePattern(this.input.find(itm => is4(itm)), 4)
    this.resolvePattern(this.input.find(itm => is7(itm)), 7)
    this.resolvePattern(this.input.find(itm => is8(itm)), 8)
    this.resolvePattern(this.patternFor6(this.input, this.patterns[1]), 6)
    this.resolvePattern(this.patternFor3(this.input, this.patterns[1]), 3)
    this.resolvePattern(this.patternFor9(this.input, this.patterns[4]), 9)
    this.resolvePattern(this.patternFor0(this.input), 0)
    this.resolvePattern(this.patternFor5(this.input, this.patterns[9]), 5)
    if (this.input.length !== 1) throw new Error(`More than one Pattern is left: ${JSON.stringify(this.input)}`)
    this.resolvePattern(this.input[0], 2)
    
    // Provides a pattern to number map where pattern letters are ordered in alphabetical order
    this.patternToNumber = Object.entries(this.patterns).reduce((acc, [number, pattern]) => ({ ...acc, [pattern.split('').sort().join('')]: number }), {})
    return this
  }

  // 3 has 5 segments and matches the pattern for 1
  patternFor3 (input, patternFor1) {
    return input
    .filter(string => string.length === 5)
    .find(string => matchesPattern(string, patternFor1))
  }

  // 6 has 6 segments and does not match the pattern for 1
  patternFor6 (input, patternFor1) {
    return input
    .filter(string => string.length === 6)
    .find(string => !matchesPattern(string, patternFor1))
  }

  // 9 has 6 segments and matches the pattern for 4
  patternFor9 (input, patternFor4) {
    const res = input
    .filter(string => string.length === 6)
    .filter(string => matchesPattern(string, patternFor4))
    if (res.length > 1) throw new Error('There is more than one answer for 9 pattern')
    return res[0]
  }

  // At that point, there is only one pattern for 6 segments left
  patternFor0 (input) {
    const res = input
    // Filter inputs with 5 letters
    .filter(string => string.length === 6)
    if (res.length > 1) throw new Error('There is more than one answer for 0 pattern')
    return res[0]
  }

  // Only 2 and 5 left, but 9 matches 5!
  patternFor5 (input, patternFor9) {
    const res = input
    // Find pattern with all letters in pattern 1
    .filter(string => matchesPattern(patternFor9, string))[0]
    return res
  }

  decodeOutput () {
    const output = this.output
    .map(pattern => this.patternToNumber[pattern]).join('')
    return parseInt(output)
  }

}

/**
 * Returns true if all letters present in the pattern are in the string
 * @param {string} string: string to test 
 * @param {string} pattern: string pattern containing the letters to match
 */
const matchesPattern = (string, pattern) => pattern.split('').every(letter => string.split('').includes(letter))

module.exports = { is1, is4, is7, is8, findPatternsAfterSeparator, PatternDecoder }