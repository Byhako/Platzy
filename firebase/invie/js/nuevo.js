const ref = firebase.database().ref("usuario")
const refTest = firebase.database().ref("test")

const btnLogout = document.getElementById('logout')

const btnPush = document.getElementById('btn-push')
const btnUpdate = document.getElementById('btn-update')
const btnSet = document.getElementById('btn-set')
const btnDelete = document.getElementById('btn-delete')

const perfilNombre = document.getElementById('perfilNombre')
const perfilEmail = document.getElementById('perfilEmail')
const perfilTelefono = document.getElementById('perfilTelefono')
const perfilDireccion = document.getElementById('perfilDireccion')
const datosPerfil = document.getElementById('datosPerfil')

const btnEditar = document.getElementById('perfilEditar')

const formularioPerfil = document.getElementById('formularioPerfil')
const nombreForm = document.getElementById('nombreForm')
const emailForm = document.getElementById('emailForm')
const telefonoForm = document.getElementById('telefonoForm')
const calleForm = document.getElementById('calleForm')
const interiorForm = document.getElementById('interiorForm')
const coloniaForm = document.getElementById('coloniaForm')
const cpForm = document.getElementById('cpForm')

const btncancelar = document.getElementById('cancelForm')

var usuario = {}

//*****************************************************
// escuchador de sesion
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid
    leerInfo(uid)
    usuario = {uid}
    }
  else{
    window.location.href = 'index.html'
  }
})
//*****************************************************


btnLogout.addEventListener('click', function(){
    event.preventDefault()
    firebase.auth().signOut()
})



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

// Leer informacion de la base de datos.

/*El metodo once, lee la informacion de fribase cada vez que nosotros
actualizamos la pagina, si no se actualiza, aunque la informacion
cambie en la base de datos, la pagina no actualiza sola. El metodo
on, es un escuchador permanente, cada vez que cambia la informacion
en la base de datos, se actuliza en los dispositivos.*/
function leerInfo (uid) {
  ref.child(uid).on('value', (data) => {
    const dat = data.val()
    llenarInfo(dat.nombre, dat.email, dat.telefono, dat.direccion)
  })
}

function llenarInfo (nombre, email, telefono, direccion) {
  perfilNombre.innerHTML = nombre
  perfilEmail.innerHTML = email
  perfilTelefono.innerHTML = telefono || 'sin numero'
  var dir = 'sin direccion'
  if (direccion) {
    dir = direccion.calle
  }
  perfilDireccion.innerHTML = dir
}

btnEditar.addEventListener('click', () => {
  datosPerfil.style.display = 'none'
  formularioPerfil.style.display = 'flex'
})

btncancelar.addEventListener('click', () => {
  datosPerfil.style.display = 'block'
  formularioPerfil.style.display = 'none'
})

function editarDatos () {
  event.preventDefault()

  // firebase.auth().currentUser

  const obj = {
    nombre: nombreForm.value,
    email: emailForm.value,
    telefono : telefonoForm.value,
    direccion: {
      calle: calleForm.value,
      interior: interiorForm.value,
      colonia: coloniaForm.value,
      cp: cpForm.value
    }
  }
  console.log('guardar',obj)
  ref.child(usuario.uid).update(obj)
  .then(() => {
    datosPerfil.style.display = 'block'
    formularioPerfil.style.display = 'none'
  })
  .catch((err) => {
    console.log('Error ',err)
  })
}