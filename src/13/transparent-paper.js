
class TransparentPaper {
  constructor (input) {
    const [dotsInput, foldingInstructionsInput] = input.split('\n\n')
    
    this.saveUniqueDots(
      dotsInput.split('\n').map(row => {
        const [x, y] = row.split(',').map(itm => parseInt(itm))
        return ({ x, y })
      })
    )

    this.foldingInstructions = foldingInstructionsInput.split('\n')
    .map(itm => {
      const [axis, index] = itm.match(/[xy]=[0-9]+/)[0].split('=')
      return {axis, index: parseInt(index)}
    })
  }

  /**
   * Deduplicates and saves unique dots
   * @param {*} dots 
   */
  saveUniqueDots (dots) {
    this.dots = [...new Set(dots.map(itm => JSON.stringify(itm)))].map(itm => JSON.parse(itm))
  }

  /**
   * Updates dots coordinates based on the next fold instructions
   */
  fold () {
    const { axis, index } = this.foldingInstructions.shift()
    const dotsToUpdate = this.dots
    .map(itm => {
      // do not update coordinates if the dot is not concerned with the update
      if ((itm[axis] < index)) return itm
      return { ...itm, [axis]: itm[axis] - (itm[axis] - index) * 2 }
    })
    this.saveUniqueDots(dotsToUpdate)
  }

  countDots () {
    return this.dots.length
  }

  foldAll () {
    this.foldingInstructions.forEach(() => this.fold())
  }

  draw () {
    const xMax = Math.max(...this.dots.map(({ x }) => x))
    const yMax = Math.max(...this.dots.map(({ y }) => y))
    const canvas = new Array(yMax+1).fill(null).map(() => new Array(xMax+1).fill(null))
    this.dots.forEach(({x,y}, index) => {
      try {
        const labels = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y']
        canvas[y][x] = '#'

      } catch(e) {
        console.log(`impoosible at index ${index}`, {x, y})
      }
    })
    return canvas.map(row => row.map(cell => cell === null ? '.' : cell).join('')).join(('\n'))
  }
}

module.exports = { TransparentPaper }
