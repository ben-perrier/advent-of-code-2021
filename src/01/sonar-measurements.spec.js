const { expect } = require('@jest/globals')
const sonarMeasurements = require('./sonar-measurements')

describe('hasIncreased', () => {
  it('should return false if there is no last measurement', () => {
    expect(
      sonarMeasurements.hasIncreased(undefined, 100)
    ).toBe(false)
  })

  it('should return false if the current measurement is lower than the last', () => {
    expect(
      sonarMeasurements.hasIncreased(100, 99)
    ).toBe(false)
  })

  it('should return false if the current measurement is equal to the last', () => {
    expect(
      sonarMeasurements.hasIncreased(100, 100)
    ).toBe(false)
  })

  it('should return true if the current measurement is higher than the last', () => {
    expect(
      sonarMeasurements.hasIncreased(100, 101)
    ).toBe(true)
  })
})