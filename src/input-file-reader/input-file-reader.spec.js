const inputFileReader = require('./index')

describe('readFile', () => {
  it('should return the input file as a string', () => {
    const output = inputFileReader.readFile(`${__dirname}/input.txt`)
    expect(output).toBe(`abc\ndef\n\nghi\njkl`)
  })
})

describe('splitFileByRow', () => {
  it('should calculate the correct row', () => {
    const output = inputFileReader.splitFileByRow(`${__dirname}/input.txt`)
    expect(output).toEqual(['abc', 'def', '', 'ghi', 'jkl'])
  })
})

describe('splitFileByRow', () => {
  it('should calculate the correct row', () => {
    const output = inputFileReader.splitFileByRow(`${__dirname}/input.txt`)
    expect(output).toEqual(['abc', 'def', '', 'ghi', 'jkl'])
  })
})

