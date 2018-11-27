import { getData } from '../promise'

describe('Probar async/await', () => {
  test('Petición a un Api', async () => {
    const url = 'https://rickandmortyapi.com/api/character/'
    const getRick = 'https://rickandmortyapi.com/api/character/1'
    await getData(url).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
    })
    await getData(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez')
    })
  })
  test('Petición con error', async () => {
    const apiError = 'https://httpstat.us/404'
    const peticion = getData(apiError)
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
  })
  test('Resuelve promesa', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
