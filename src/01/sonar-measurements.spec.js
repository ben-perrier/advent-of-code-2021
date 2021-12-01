const { expect } = require('@jest/globals')
const sonarMeasurements = require('./sonar-measurements')

const puzzleSample = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263
]

const PART_1_EXAMPLE_RESULT = 7
const PART_2_EXAMPLE_RESULT = 5


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

describe('countIncreases', () => {
  it('should count the correct amount of increases', () => {
    expect(
      sonarMeasurements.countIncreases(puzzleSample)
    ).toBe(PART_1_EXAMPLE_RESULT)
  })
})

describe('countSlidingWindowIncreases', () => {
  it('should count the correct amount of increases', () => {
    const WINDOW_LENGTH = 3
    expect(
      sonarMeasurements.countSlidingWindowIncreases(puzzleSample, WINDOW_LENGTH)
    ).toBe(PART_2_EXAMPLE_RESULT)
  })
})