# FireBase

## Develop:

+ Realtime DataBase
+ Authentication
+ Cloud Messaging
+ Storage
+ Hosting
+ Test Lab
+ Crash Reporting

## Grow:

+ Notifications
+ Remote Config
+ App Indexing
+ Dymanic Links
+ Invites
+ AdWords

## Earn:

+ AdMob (Publicidad dirigida)

# FireBase Web

+ Authentucation (Google y face)
+ Database
+ Storange
+ Rules scurity, roles
+ Hosting

https://firebase.google.com/docs/guides/?hl=es-419

https://github.com/firebase/quickstart-js

## Conectar proyecto con firebase.

Primero creamos poryecto desde la consola de firebase, luego:

$ sudo npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase use --add
$ firebase serve

+ En archivo firebase.json agregar:

```
  "hosting": {
    "public": "./"
  }
```
### Conectando con Google.
  var provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

  firebase.auth().signInWithPopup(provider)
  .then((datosUser) => {
    console.log(datosUser)
  })
  .catch((err) => {
    console.log(err)
  })

  event.preventDefault()
  firebase.auth().signOut()

### Conectando con Facebook.
  https://developers.facebook.com

## Bases de Datos

**Podemos usar el modelo no relacional siempre que consideremos lo siguiente:**

+ La coherencia de los datos No es crítica (sólo en casos específicos lo es, la mayoría de veces no)

+ No hay estándares sobre cómo estructurar la información en el modelo no relacional.

+ Hacer Business Intelligence sobre el modelo no relacional es más complicado.

+ Se requieren un conocimiento sólido en programación.

+ Cada base de datos tiene sus peculiaridades y métodos (Firebase, Mongo, etc).


### Metodos para agregar a la base de datos.

+ El metodo **push**, genera un nuevo nodo CON un nuevo uid con cada click dentro 
del nodo que tenga como referencia.

+ El metodo **update**, genera un nuevo nodo SIN un nuevo uid con cada click dentro 
del nodo que tenga como referencia, o actualiza la informacion 
si el nodo ya exite.  Con el metodo child() podemos actualizar
un nodo en especifico donde: 

  refTest.child('uid').update(newObj)

tambien podemos especificar el uid con el que deseamos crear el nuevo nodo
usando el mismo metodo child(uid).

+ 

