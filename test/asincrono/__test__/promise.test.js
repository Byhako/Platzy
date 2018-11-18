import { getData } from '../promise'

describe('Probando promesas', () => {
  test('Realizando una peticion a una api', done => {
    const url = 'https://rickandmortyapi.com/api/character/'
    getData(url).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })
})
