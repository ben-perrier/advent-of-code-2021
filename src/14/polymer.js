/**
 * Returns the insertion spec: index and element
 */
const insertions = (template, pairs) => {
  return template.split('').map((_, index) => {
    const current = `${template[index]}${template[index+1]|| ' '}`
    return pairs.filter(({ match }) => current === match).map(({ element }) => ({ element, index: index+1 }))
  }).flat()
}

const prepareInput = (input) => {
  const [template, pairsInput] = input.split('\n\n')
  const pairs = pairsInput.split('\n').map(row => {
    const [match, element] = row.split(' -> ')
    return { match, element }
  })
  return { template, pairs }
}

const insertElements = (input, steps = 1) => {
  const { template, pairs } = prepareInput(input)
  let result = template
  new Array(steps).fill().map((_, iterationNumber) => {
    insertions(result, pairs).forEach(({ element, index }, insertionNumber) => {
      result = insertElement(result, element, index+insertionNumber)
    })
  })
  return result
}

const insertElement = (template, element, index) => {
  return `${template.slice(0, index)}${element}${template.slice(-(template.length-index))}`
}

module.exports = { prepareInput, insertions, insertElements, insertElement }
