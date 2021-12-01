const fs = require('fs')

const readFile = (path) => fs.readFileSync(path, 'utf8')

const splitFileByRow = (path) => readFile(path).split('\n')

module.exports = { readFile, splitFileByRow }