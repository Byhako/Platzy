const btnLogin = document.getElementById('login')
const btnLogout = document.getElementById('logout')

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
  })
  .catch((err) => {
    console.log(err)
  })

})

btnLogout.addEventListener('click', function(){
    event.preventDefault()
    firebase.auth().signOut()
})

