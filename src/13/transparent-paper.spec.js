const { TransparentPaper } = require('./transparent-paper')

const input = 
`6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`

const turnToPoint = (array) => array.map(itm => itm.split(',')).map(([ x, y ]) => ({ x: parseInt(x), y: parseInt(y) }))

describe('tranparentPaper > fold', () => {

  describe('tranparentPaper > fold y ', () => {
    const paper = new TransparentPaper(input)
    // first fold is based on y axis
    paper.fold()
    console.log(paper.draw())

    it('should not update points before the fold', () => {
      const stayingSame = ['3,0',
      '6,0',
      '9,0',
      '0,3',
      '3,4',
      '8,4',
      '10,4']
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining(turnToPoint(stayingSame))
      )
    })
    it('should update the points after the fold', () => {
      const updated = ['1,4',
      '6,4',
      '9,4']
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining(turnToPoint(updated))
      )
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining([{
          x: 6,
          y: 2
        }])
      )
    })
  })
  describe('tranparentPaper > fold x ', () => {
    const paper = new TransparentPaper(input)
    // first fold is based on y axis
    paper.fold()
    // second fold is based on x axis
    paper.fold()
    console.log(paper.draw())


    it('should not update points before the fold', () => {
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining([{
          x: 0,
          y: 0
        }, {
          x: 2,
          y: 0
        }, {
          x: 3,
          y: 0
        }])
      )
    })

    it('should update the points after the fold', () => {
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining([{
          x: 1,
          y: 0
        }])
      )
      expect(
        paper.dots
      ).toEqual(
        expect.arrayContaining([{
          x: 3,
          y: 0
        }])
      )
    })
  })
})

describe('transparentPaper > fold vertically', () => {
  const paper = new TransparentPaper(input)
  paper.fold()
  it('should count the unique points left', () => {
    expect(
      paper.countDots()
    ).toBe(
      17
    )
  })
})

describe('transparentPaper > fold horizontally', () => {
  const paper = new TransparentPaper(input)
  paper.fold()
  it('should count the unique points left', () => {
    expect(
      paper.countDots()
    ).toBe(
      17
    )
  })
})