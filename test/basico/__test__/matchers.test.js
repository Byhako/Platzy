describe('Comparadores comunes', () => {
  const user = {
    name: 'Ruben',
    profession: 'Fisico'
  }

  const user2 = {
    name: 'Ruben',
    profession: 'Fisico'
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })
})