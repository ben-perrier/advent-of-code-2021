const sevenSegments = require('./seven-segments')

const input = 
`be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`.split('\n')


describe('sevenSegments > findPatternsAfterSeparator', () => {
  it('should identify a 1', () => {
    expect(
      sevenSegments.findPatternsAfterSeparator(input)
    ).toBe(26)
  })
})

describe('sevenSegments > is1', () => {
  it('should identify a 1', () => {
    expect(
      sevenSegments.is1('gc')
    ).toBe(true)
  })
})

describe('sevenSegments > is4', () => {
  it('should identify a 4', () => {
    expect(
      sevenSegments.is4('fgae')
    ).toBe(true)
  })
})

describe('sevenSegments > is7', () => {
  it('should identify a 7', () => {
    expect(
      sevenSegments.is7('cgb')
    ).toBe(true)
  })
})

describe('sevenSegments > is8', () => {
  it('should identify a 8', () => {
    expect(
      sevenSegments.is8('aecbfdg')
    ).toBe(true)
  })
})

describe('sevenSegments > PatternDecoder > decodePatterns', () => {
  it('assign segments', () => {
    const line = 'acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf'
    const patternDecoder = new sevenSegments.PatternDecoder(line)
    patternDecoder.decodePatterns()
    expect(
      patternDecoder
    ).toEqual(expect.objectContaining({
      patterns: {
        0: 'cagedb',
        1: "ab",
        2: 'gcdfa',
        3: "fbcad",
        4: "eafb",
        5: 'cdfbe',
        6: 'cdfgeb',
        7: "dab", 
        8: "acedgfb",
        9: "cefabd"
      },
      patternToNumber: {
        "ab": "1",
        "abcdef": "9", 
        "abcdefg": "8", 
        "abcdeg": "0", 
        "abcdf": "3", 
        "abd": "7", 
        "abef": "4", 
        "acdfg": "2", 
        "bcdef": "5", 
        "bcdefg": "6"
      }
    }))

    expect(
      patternDecoder.decodeOutput()
    ).toEqual(5353)
  })
})



