const ref = firebase.database().ref("usuario")
const imgref = firebase.storage().ref()
const refGuitarras = firebase.database().ref("guitarras")

const btnLoginface = document.getElementById('loginFace')
const btnLogingoogle = document.getElementById('loginGoogle')
const btnLogout = document.getElementById('logout')
const btnPerfil = document.getElementById('perfil')
const admin = document.getElementById('Padmin')


var usuario = {}

//*****************************************************
// escuchador de sesion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    btnLoginface.style.display = "none"
    btnLogingoogle.style.display = "none"
    btnLogout.style.display = "inline-block"
    btnPerfil.style.display = "inline-block"
    admin.style.display = "inline-block"
    }
  else{
    btnLoginface.style.display = "inline-block"
    btnLogingoogle.style.display = "inline-block"
    btnLogout.style.display = "none"
    btnPerfil.style.display = "none"
    admin.style.display = "none"
  }
})
//*****************************************************

// Google Button
btnLogingoogle.addEventListener('click', (event) => {
  event.preventDefault()
  var provider = new firebase.auth.GoogleAuthProvider()
  // var provider = new firebase.auth.FacebookAuthProvider()

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  // provider.addScope('public_profile')

  firebase.auth().signInWithPopup(provider)
  .then((datosUser) => {
    usuario = {
      nombre: datosUser.user.displayName,
      email: datosUser.user.email,
      uid: datosUser.user.uid
    }
    console.log(usuario)
    addUser(usuario, usuario.uid)

    leerGuitarras()
    leerguitarrasVip()
  })
  .catch((err) => {
    console.log(err)
  })
})


// Facebook button
btnLoginface.addEventListener('click', (event) => {
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

    leerGuitarras()
    leerguitarrasVip()
  })
  .catch((err) => {
    console.log(err)
  })
})

// Logout Button
btnLogout.addEventListener('click', function(event){
    event.preventDefault()
    firebase.auth().signOut()
    console.log('logout success')
})


function addUser(usuario, uid) {
  ref.child(uid).update(usuario)
}

//---------------------------------------------------------------
//-----------  AGREGAR GUITARRAS  -------------------------------
//---------------------------------------------------------------

function leerGuitarras () {
  refGuitarras.child('vip').on('child_added', (datos) => {
    const guitar = datos.val()
    const nombreGui = datos.val().nombre
    const contenedorElementos = document.getElementById('guitarrasContent')
    contenedorElementos.insertBefore(
      crearElementoGuitarra(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.img),
        contenedorElementos.firsChild
      )
  } )
}

function leerguitarrasVip () {
  refGuitarras.child('normal').on('child_added', (datos) => {
    const guitar = datos.val()
    const nombreGui = datos.val().nombre
    const contenedorElementos = document.getElementById('guitarrasContentVip')
    contenedorElementos.insertBefore(
      crearElementoGuitarra(datos.key, guitar.nombre, guitar.precio, guitar.descripcion, guitar.img),
        contenedorElementos.firstChild
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

  const guitarElement = div.firstChild
  var imgURL = ""
  imgref.child(img).getDownloadURL().then((url) => {
    imgURL = url
  }).then(() => {
    guitarElement.getElementsByClassName('title-b')[0].innerText = nombre
    guitarElement.getElementsByClassName('precio-b')[0].innerText = precio
    guitarElement.getElementsByClassName('descripcion-b')[0].innerText = descripcion
    guitarElement.getElementsByClassName('derecha')[0].src = imgURL
  })
  return guitarElement
}

leerGuitarras()
leerguitarrasVip()