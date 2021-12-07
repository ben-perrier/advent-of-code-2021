
const modelise = (puzzle) => {
	return new Modelisation(puzzle)
}

class Modelisation {
	constructor (puzzle) {
		this.map = {}
		puzzle
		.filter((itm) => !this.isVectorDiagonal(itm))
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
		return { x1, x2, y1, y2 }
	}

	vectorKeys (vectorString) {
		const { x1, x2, y1, y2 } = this.breakdownVector(vectorString)
		const [xMin, xMax] = [x1, x2].sort((a,b) => a-b)
		const [yMin, yMax] = [y1, y2].sort((a,b) => a-b)
		return new Array((xMax - xMin) + 1).fill().map((_, xIndex) => new Array(yMax - yMin+1).fill().map((_, yIndex) => 
			`${xMin + xIndex}-${yMin + yIndex}`
		)).flat()
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