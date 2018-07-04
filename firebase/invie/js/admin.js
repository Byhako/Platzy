const ref = firebase.database().ref("usuario")
const refGuitarras = firebase.database().ref("guitarras")

const btnLogout = document.getElementById('logout')
const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const descripcion = document.getElementById('descripcion')
const tipo = document.getElementById('tipo')
const imagen = document.getElementById('img')

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
  .then((data) => {
    console.log('Datos enviados ',data)
  })
  .catch((err) => {
    alert(err)
  })
}

// Logout Button
btnLogout.addEventListener('click', function(event){
    event.preventDefault()
    firebase.auth().signOut()
    console.log('logout success')
})