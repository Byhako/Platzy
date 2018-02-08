export default function platzom(str) {
  let translation = str

  // si la palabra termina en "ar" se le quitan
  if (str.toLowerCase().endsWith('ar')) {
    // slice() permite cortar cadena, desde-hasta
    translation = str.slice(0, -2)
  }
  // Si la palabra inicia con z, se añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation = translation + 'pe'
  }
  // Si la palabra tiene 10 o mas letras se parte a la mitad, 
  // y se une con un guion
  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length / 2.0))
    const secondHalf = translation.slice(Math.round(translation.length / 2.0))
    translation = `${firstHalf}-${secondHalf}`
  }
  // Si es un palindromo, se retorna la misma palabra
  // intercalando mayusculas y minusculas

  // funcion que invierte string
  // 'eno'.split('') -> ['e','n','o']
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize //invertimos booleano
    }
    return translation
  }

  //const minMay=(str)=>str.split('').map( (value,key)=> key % 2==0 ? value.toUpperCase() : value.toLowerCase() ).join("");

  if (str == reverse(str)) {
    return minMay(str)
  }
  return translation
}