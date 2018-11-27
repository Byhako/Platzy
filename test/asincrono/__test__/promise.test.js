import { getData } from '../promise'

describe('Probando promesas', () => {
  test('Realizando una peticion a una api', done => {
    const url = 'https://rickandmortyapi.com/api/character/'
    getData(url).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })
  test('Probamos resolve', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola')
  })
  test('Rechaza promesa', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
