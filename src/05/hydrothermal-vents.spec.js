const vents = require('./hydrothermal-vents')

const input = 
`0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`.split('\n')

describe('modelise and countOverlaps', () => {
  it('should modelise vents in straight line and count the number of a min of 2 overlapping vents', () => {
    expect(
      vents.modelise(input).countOverlaps(2)
    ).toBe(5)
  })
})
