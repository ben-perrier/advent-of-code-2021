const { gammaRate, epsilonRate, c02ScrubberRating, oxygenGeneratorRating } = require('./diagnostics-reports')

const input = 
`00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split('\n')


describe('gammaRate', () => {
  it(`should return the gammaRate in binary`, () => {
    expect(gammaRate(input)).toBe('10110')
  })
})

describe('epsilonRate', () => {
  it(`should return the epsilonRate in binary`, () => {
    expect(epsilonRate(gammaRate(input))).toBe('01001')
  })
})

describe('oxygenGeneratorRating', () => {
  it(`should return the oxygenGeneratorRating in binary`, () => {
    expect(oxygenGeneratorRating(input)).toBe('10111')
    expect(parseInt(oxygenGeneratorRating(input), 2)).toBe(23)
  })
})

describe('c02ScrubberRating', () => {
  it(`should return the epsilonRate in binary`, () => {
    expect(c02ScrubberRating(input)).toBe('01010')
    expect(parseInt(c02ScrubberRating(input), 2)).toBe(10)
  })
})

const decimalise = (binary) => parseInt(binary, 2)