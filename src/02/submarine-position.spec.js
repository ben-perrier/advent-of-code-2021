const { SubmarinePosition, SubmarinePosition2 } = require('./submarine-position')

const input = 
`forward 5
down 5
forward 8
up 3
down 8
forward 2`.split('\n')


describe('SubmarinePosition', () => {
  describe('SubmarinePosition processCommands', () => {
    it('should return the position and depth of the submarine', () => {
      const submarinePosition = new SubmarinePosition().processCommands(input)
      const { position, depth } = submarinePosition.currentPosition()
      expect(position).toBe(15)
      expect(depth).toBe(10)
    })
  })
})

describe('SubmarinePosition2', () => {
  describe('SubmarinePosition2 processCommands', () => {
    it('should return the position and depth of the submarine', () => {
      const submarinePosition = new SubmarinePosition2().processCommands(input)
      const { position, depth } = submarinePosition.currentPosition()
      expect(position).toBe(15)
      expect(depth).toBe(60)
    })
  })
})