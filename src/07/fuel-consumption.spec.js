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

describe('fuelComsumption fuelCostCrabEngineering', () => {
  it('should return the fuel comsumption for all crabs to move to a certain horizontal position', () => {
    expect(
      fuelConsumption.fuelCost(input, 5, true)
    ).toBe(168)
  })
})

describe('fuelComsumption costOfMovingWithCrabEngineering', () => {
  it('should return the fuel comsumption for all crabs to move to a certain horizontal position', () => {
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(16, 5)
    ).toBe(66)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(1, 5)
    ).toBe(10)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(2, 5)
    ).toBe(6)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(0, 5)
    ).toBe(15)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(2, 5)
    ).toBe(6)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(7, 5)
    ).toBe(3)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(1, 5)
    ).toBe(10)
    expect(
      fuelConsumption.costOfMovingWithCrabEngineering(14, 5)
    ).toBe(45)
  })
})


