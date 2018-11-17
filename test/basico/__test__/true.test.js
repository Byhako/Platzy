import { isNull, isTrue, isFalse, isUndefined } from '../true'

describe('Probar nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull()
  })
})

describe('Probar verdaderos', () => {
  test('true', () => {
    expect(isTrue()).toBeTruthy()
  })
})

describe('Probar falsos', () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy()
  })
})

describe('Probar indefinidos', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
})
