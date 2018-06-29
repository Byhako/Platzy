const ref = firebase.database().ref("usuario")
const imgref = firebase.storage().ref()
const refGuitarras = firebase.database().ref("guitarras")

const btnLogin = document.getElementById('login')
const btnLogout = document.getElementById('logout')
const btnPerfil = document.getElementById('perfil')



var usuario = {}

//*****************************************************
// escuchador de sesion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    btnLogin.style.display = "none"
    btnLogout.style.display = "inline-block"
    btnPerfil.style.display = "inline-block"
    }
  else{
    btnLogin.style.display = "inline-block"
    btnLogout.style.display = "none"
    btnPerfil.style.display = "none"
  }
})
//*****************************************************

btnLogin.addEventListener('click', () => {
  event.preventDefault()
  // var provider = new firebase.auth.GoogleAuthProvider()
  var provider = new firebase.auth.FacebookAuthProvider()

  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  provider.addScope('public_profile')

  firebase.auth().signInWithPopup(provider)
  .then((datosUser) => {
    usuario = {
      nombre: datosUser.user.displayName,
      email: datosUser.user.email,
      uid: datosUser.user.uid
    }
    console.log(usuario)
    addUser(usuario, usuario.uid)
  })
  .catch((err) => {
    console.log(err)
  })

})

btnLogout.addEventListener('click', function(){
    event.preventDefault()
    firebase.auth().signOut()
    console.log('logout success')
})


function addUser(usuario, uid) {
  ref.child(uid).update(usuario)
}

function leerGuitarras () {
  refGuitarras.child('vip').on('child_added', (datos) => {
    console.log('vip', datos.val())
    const guitar = datos.val()
    const nombreGui = datos.val().nombre
    const contenedorElementos = document.getElementById('guitarrasContent')
    console.log(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.metadata)
    contenedorElementos.insertBefore(
      crearElementoGuitarra(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.img),
        contenedorElementos.firsChild
      )
  } )
}

function leerguitarrasVip () {
  refGuitarras.child('normal').on('child_added', (datos) => {
    console.log('normales', datos.val())
    const guitar = datos.val()
    const nombreGui = datos.val().nombre
    const contenedorElementos = document.getElementById('guitarrasContentVip')
    console.log(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.metadata)
    contenedorElementos.insertBefore(
      crearElementoGuitarra(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.img),
        contenedorElementos.firsChild
      )
  } )
}

function crearElementoGuitarra(key, nombre, precio, descripcion, img) {
  const uid = firebase.auth().currentUser.uid

  const html = 
      '<article class="guitarra contenedor">' +
        '<img class="derecha" src="" alt="Guitarra Invie Acustica" width="150"/>' +
        '<div class="contenedor-guitarra-a">' +
          '<h3 class="title-b"></h3>' +
          '<ol>' +
            '<li class="precio-b"></li>' +
            '<li class="descripcion-b"></li>' +
          '</ol>' +
        '</div>' +
        '<button type="button" onclick="comprar('+'`'+key+'`'+')">Comprar</button>'+
      '</article>'

  // Create the DOM element from the HTML
  const div = document.getElementById('div')
  div.innerHTML = html
  const guitarElement = div.firsChild
  const imgURL = ""
  imgref.child(img).getDownloadURL().then((url) => {
    imgURL = url
  }).then(() => {
    guitarElement.getElementByClassName('title-b')[0].innerText = nombre
    guitarElement.getElementByClassName('precio-b')[0].innerText = precio
    guitarElement.getElementByClassName('descripcion-b')[0].innerText = descripcion
    guitarElement.getElementByClassName('derecha')[0].src = imgURL
  })
  return guitarElement
}

leerGuitarras()
leerguitarrasVip()