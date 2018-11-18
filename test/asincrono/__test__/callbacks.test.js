import { callbackHell } from '../callbacks'

describe('Probando callback', () => {
  test('callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hola bebe')
      done()
    }
    callbackHell(otherCallback)
  })
})
