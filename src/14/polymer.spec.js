const polymer = require('./polymer')

const input = 
`NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

describe('prepareInput', () => {
  it('should return the template and pairs', () => {
    expect(
      polymer.prepareInput(input)
    ).toEqual(
      expect.objectContaining({ 
        template: 'NNCB',
        pairs: expect.arrayContaining([{
            match: 'CH', 
            element:'B'
          }, {
            match: 'CN', 
            element:'C'
        }])
      })
    )
  })
})

describe('insertions', () => {
  const { template, pairs } = polymer.prepareInput(input)
  it('should return the insertions', () => {
    expect(
      polymer.insertions(template, pairs)
    ).toEqual(
      expect.arrayContaining([{
        element: 'C', 
        index: 1
      }, {
        element: 'B', 
        index: 2
      }, {
        element: 'H', 
        index: 3
      }])
    )
  })
})

describe('insertions', () => {
  const { template, pairs } = polymer.prepareInput(input)
  it('should return template with insertions for 1st run', () => {
    expect(
      polymer.insertElements(input, 1)
    ).toEqual(
      'NCNBCHB'
    )
  })
  it('should return template with insertions for 2nd run', () => {
    expect(
      polymer.insertElements(input, 2)
    ).toEqual('NBCCNBBBCBHCB')
  })
  it('should return template with insertions for 3rd run', () => {
    expect(
      polymer.insertElements(input, 3)
    ).toEqual('NBBBCNCCNBBNBNBBCHBHHBCHB')
  })
  it('should return template with insertions for 4th run', () => {
    expect(
      polymer.insertElements(input, 4)
    ).toEqual('NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB')
  })
})

describe('insertElement', () => {
  it('should return insert the element in the string', () => {
    expect(
      polymer.insertElement('NNCB', 'C', 1)
    ).toEqual(
      'NCNCB'
    )
  })
})

