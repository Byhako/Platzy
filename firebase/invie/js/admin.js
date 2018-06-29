const ref = firebase.database().ref("usuario")
const refGuitarras = firebase.database().ref("guitarras")

const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const descripcion = document.getElementById('descripcion')
const tipo = document.getElementById('tipo')
const imagen = document.getElementById('img')

console.log(imagen)
var usuario = {}


//*****************************************************
// escuchador de sesion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid
    usuario = {uid}
    }
  else{
    window.location.href = 'index.html'
  }
})
//*****************************************************


function nuevaGuitarra () {
  event.preventDefault() 
  
  const obj = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    tipo: tipo.value,
    precio: precio.value,
    img: imagen.value
  }

  console.log(obj)

  if (obj.tipo == "normal") {
    subirGuitarra(obj, 'normal')
  }
  else if (obj.tipo == 'vip') {
    subirGuitarra(obj, 'vip')
  }
  else {
    alert('Eres un bruto')
  }
}

function subirGuitarra (guitarra, tipo) {
  refGuitarras.child(tipo).push(guitarra)
}