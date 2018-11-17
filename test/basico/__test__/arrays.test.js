import { arrayFruits, arrayColors } from '../arrays'

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
  test('Comprobando color', () => {
    expect(arrayColors()).toContain('negro')
  })
})
