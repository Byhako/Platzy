const ref = firebase.database().ref("usuario")
const btnLogin = document.getElementById('login')
const btnLogout = document.getElementById('logout')

var usuario = {}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    btnLogin.style.display = "none"
    btnLogout.style.display = "inline-block"
    }
  else{
    btnLogin.style.display = "inline-block"
    btnLogout.style.display = "none"
  }
})

btnLogin.addEventListener('click', () => {
  event.preventDefault()
  // var provider = new firebase.auth.GoogleAuthProvider()
  var provider = new firebase.auth.FacebookAuthProvider()

  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  provider.addScope('public_profile')

  firebase.auth().signInWithPopup(provider)
  .then((datosUser) => {
    console.log(datosUser)

    usuario = {
      nombre: datosUser.user.displayName,
      email: datosUser.user.email,
      uid: datosUser.user.uid
    }
    console.log(usuario)
    addUser(usuario)
  })
  .catch((err) => {
    console.log(err)
  })

})

btnLogout.addEventListener('click', function(){
    event.preventDefault()
    firebase.auth().signOut()
})


function addUser(usuario) {
  ref.push(usuario)
}