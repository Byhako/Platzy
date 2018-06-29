const ref = firebase.database().ref("usuario")
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
