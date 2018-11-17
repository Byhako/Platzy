import { arrayColors, arrayFruits } from '../arrays'

describe('Comprobando existencia de elemento', () => {
  test('Contiene banana', () => {
    expect(arrayFruits()).toContain('banana')
  })
  test('No contiene platano', () => {
    expect(arrayFruits()).not.toContain('platano')
  })
  test('Tamaño de array', () => {
    expect(arrayFruits()).toHaveLength(6)
  })
})
