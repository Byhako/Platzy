const ref = firebase.database().ref("usuario")
const btnLogin = document.getElementById('login')
const btnLogout = document.getElementById('logout')

const btnPush = document.getElementById('btn-push')
const btnUpdate = document.getElementById('btn-update')
const btnSet = document.getElementById('btn-set')
const btnDelete = document.getElementById('btn-delete')

const refTest = firebase.database().ref("test")

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
    addUser(usuario, usuario.uid)
  })
  .catch((err) => {
    console.log(err)
  })

})

btnLogout.addEventListener('click', function(){
    event.preventDefault()
    firebase.auth().signOut()
})


function addUser(usuario, uid) {
  ref.child(uid).update(usuario)
}

/*El metodo push, genera un nuevo nodo CON un nuevo uid con cada click dentro 
del nodo que tenga como referencia.*/

btnPush.addEventListener('click', () => {
  const obj = {
    curso: 'firebase',
    profesor: 'angle',
    contenido: {
      primero: 'autenticacion'
    }
  }
  refTest.push(obj)
  .then(() => {
    console.log('Datos enviados')
  })
  .catch((err) => {
    console.log('Error ',err)
  })
})

/*El metodo update, genera un nuevo nodo SIN un nuevo uid con cada click dentro 
del nodo que tenga como referencia, o actualiza la informacion 
si el nodo ya exite, se puede agragar info. Con el metodo child() podemos actualizar
un nodo en especifico donde: 
  refTest.child('uid').update(newObj)

tambien podemos especificar el uid con el que deseamos crear el nuevo nodo
usando el mismo metodo child(uid)
*/

btnUpdate.addEventListener('click', () => {
  const newObj = {
    curso: 'React',
    profesor: 'Esteban',
    contenido: {
      primero: 'Redux'
    }
  }
  // refTest.child('LG7i1UJfJUlvobhoQlP').update(newObj)
  refTest.update(newObj)
  .then(() => {
    console.log('Datos actualizados')
  })
  .catch((err) => {
    console.log('Error ',err)
  })
})

/*El metodo set sirve para sobreescribir la informacion, borra todo lo que
esta en el node ref, y escribe la nueva informacion*/
btnSet.addEventListener('click', () => {
  const otherObj = {
    curso: 'Ruby',
    profesor: 'Geko',
    contenido: {
      primero: 'Gemas'
    }
  }
  refTest.set(otherObj)
  .then(() => {
    console.log('Datos sobreescritos')
  })
  .catch((err) => {
    console.log('Error ',err)
  })
})



btnDelete.addEventListener('click', () => {
  refTest.child('-LG8XlOo6rPjwfIuExJO').remove()
  .then(() => {
    console.log('Datos eliminados')
  })
  .catch((err) => {
    console.log('Error ',err)
  })
})