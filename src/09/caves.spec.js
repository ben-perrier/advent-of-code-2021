const caves = require('./caves')

const input = 
`2199943210
3987894921
9856789892
8767896789
9899965678`


describe('caves > lowPoints', () => {
  it('should find low points', () => {
    expect(
      caves.lowestPointsTotalRisk(input)
    ).toBe(15)
  })
})

describe('caves > largestBasinsSizes', () => {
  it('should find low points', () => {
    expect(
      caves.largestBasinsSizes(input, 3)
    ).toBe(1134)
  })
})

