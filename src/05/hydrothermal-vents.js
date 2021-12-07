
const modelise = (puzzle, excludeDiagonals) => {
	return new Modelisation(puzzle, excludeDiagonals)
}

class Modelisation {
	constructor (puzzle, excludeDiagonals) {
		this.map = {}
		puzzle
		.filter((itm) => excludeDiagonals ? !this.isVectorDiagonal(itm) : true)
		.forEach(row => {
			this.increaseVector(row)
		})
	}

	isVectorDiagonal (vectorString) {
		const { x1, x2, y1, y2 } = this.breakdownVector(vectorString)
		return x1 !== x2 && y1 !== y2
	}

	increaseVector (vectorString) {
		const keys = this.vectorKeys(vectorString)
		keys.forEach((key) => this.increaseKey(key))
	}

	breakdownVector (vectorString) {
		const [from, to] = vectorString.split(' -> ')
		const [x1, y1] = from.split(',').map(itm => parseInt(itm))
		const [x2, y2] = to.split(',').map(itm => parseInt(itm))
		return { x1, y1, x2, y2 }
	}

	vectorKeys (vectorString) {
		const { x1, x2, y1, y2 } = this.breakdownVector(vectorString)
		return new Array(Math.max(Math.abs(x2-x1)+1, Math.abs(y2-y1)+1)).fill().map((_, index) => {
      const dX = x2-x1 > 0 
        ? index
        : x2-x1 === 0 
          ? 0
          : -index

      const dY = y2-y1 > 0 
          ? index
          : y2-y1 === 0 
            ? 0
            : -index

      return `${x1 + dX} - ${y1 + dY}`
    }).flat()
	}

	increaseKey (key) {
		const exists = this.map[key]
		if (exists) return this.map[key] = exists+1
		return this.map[key] = 1
	}

	countOverlaps (min) {
		return Object.entries(this.map).filter(([key, value]) => value >= min).length
	}

}

module.exports = { modelise }