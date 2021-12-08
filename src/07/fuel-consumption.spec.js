const fuelConsumption = require('./fuel-consumption')

const input = `16,1,2,0,4,2,7,1,2,14`.split(',').map(itm => parseInt(itm))

describe('fuelComsumption findOptimalPosition', () => {
  it('should find the optimal horizontal position', () => {
    expect(
      fuelConsumption.findOptimalPosition(input)
    ).toBe(2)
  })
})

describe('fuelComsumption findOptimalPosition', () => {
  it('should return the fuel comsumption for all crabs to move to a certain horizontal position', () => {
    expect(
      fuelConsumption.fuelCost(input, 2)
    ).toBe(37)
  })
})



