const play = (puzzle) => {
	const [calledNumbersInput, ...gridsInputs] = puzzle.split('\n\n')

	const grids = gridsInputs.map(itm => new Grid(itm))
	const calledNumbers = calledNumbersInput.match(/[0-9]+/g).map(number => parseInt(number))

	for (let numberCalled of calledNumbers) {
		grids.forEach(grid => grid.call(numberCalled))
		const [winner] = grids.filter(grid => grid.hasWon())

		if (!winner) continue;

		const winningBoardUnmarkedNumbers = winner.sumUpUnmarkedNumbers()
		return numberCalled * winningBoardUnmarkedNumbers
	}
}

class Grid {
	constructor (input) {
		this.grid = input.split('\n').map(itm => itm.match(/[0-9]+/g).map(number => new Cell(number)))
	}

	call (number) {
		const match = this.grid.flat().find(cell => cell.number === number)
		if (match) match.isCalled = true
	}

	hasWon () {
		const hasWonRow = this.hasWinningRow(this.grid)
		const hasWonCol = this.hasWinningRow(transposeArray(this.grid))
		return hasWonRow || hasWonCol
	}

	hasWinningRow (array) {
		return array.some(row => row.every(cell => !!cell.isCalled))
	}

	sumUpUnmarkedNumbers () {
		return this.grid.flat().reduce((acc, cell) => cell.isCalled ? acc : acc+ cell.number, 0)
	}

}

class Cell {
	constructor (number) {
		this.number = parseInt(number)
		this.isCalled = false
	}

	call () {
		this.isCalled = true
	}
}

const transposeArray = (array) => array.map((row, rowIndex) => row.map((col, colIndex) => array[colIndex][rowIndex]))


module.exports = { play }
