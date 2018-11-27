describe('Comprobar cadenas de texto', () => {
  
  const text = 'Un bonito texto'

  test('Debe contener bonito', () => {
    expect(text).toMatch(/bonito/)
  })
  test('No contiene feito', () => {
    expect(text).not.toMatch(/feito/)
  })
  test('Tamaño de texto', () => {
    expect(text).toHaveLength(15)
  })
})
