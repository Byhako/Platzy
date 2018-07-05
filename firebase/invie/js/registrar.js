const ref = firebase.database().ref("usuario")

const emailIng = document.getElementById('emailIng')
const passwordIng = document.getElementById('passwordIng')
const emailReg = document.getElementById('emailReg')
const passwordReg = document.getElementById('passwordReg')
const btnRegistrar = document.getElementById('btnRegistrar')
const btnIngresar = document.getElementById('btnIngresar')

//*****************************************************
// escuchador de sesion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = 'index.html'
    }
})
//*****************************************************

// Boton Registrar
btnRegistrar.addEventListener('click', (event) => {
  const email = emailReg.value
  const password = passwordReg.value


  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((datosUser) => {
    usuario = {
      email: datosUser.user.email,
      uid: datosUser.user.uid
    }
    addUser(usuario, usuario.uid)
    alert('Usuario Creado. Bienvenido')
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = 'Error, usuario no creado: ' + error.message
    console.log('Code ',errorCode)

    alert(errorMessage)
  })
})

// Boton Ingresar
btnIngresar.addEventListener('click', (event) => {
  const email = emailIng.value
  const password = passwordIng.value


  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = 'Error, usuario no creado: ' + error.message
    console.log('Code ',errorCode)

    alert(errorMessage)
  })


})



function addUser(usuario, uid) {
  ref.child(uid).update(usuario)
}
