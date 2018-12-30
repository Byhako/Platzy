inico motor

$ mongod  --dbpath /home/ruben/github/Platzy/mongo


  port=27017

En otra terminal:  $ monog

## Comandos

-> use <database>  //  abre o crea base de datos con nombre "database"

+ Colecciones:

-> db.createCollection("nameCollection")
-> show collections

+ Crear documentos:

-> db.nameCollection.insert({name: "Toto", task: [{nt: "comer", f: "1"},{nt:"dormir", f:"2"}]})
-> db.nameCollection.find()

## CRUD

Cuando hablamos de CRUD nos referimos a un programa o sistema que es capaz de realizar las operaciones de: Creación (Create), Consulta o Lectura (Read), Actualización (Update) y Eliminación (Delete) de información de una base de datos.

Para realizar las dos primeras operaciones de CRUD en MongoDB utilizamos las siguientes instrucciones:

+ *Crear*: insertar documentos en una colección.
`
db.<colección>.insertOne(
        {<objeto / documento JSON>}
)
`
+ *Consultar / Leer*: buscar documentos en una colección.
`
db.<colección>.find(
        {<criterios de consulta>},
        {<campos devueltos>}
).limit(<n max de documentos devueltos>)
`
NOTA: Para ejecutar las instrucciones en Robomongo, debemos presionar la tecla F5 o hacer clic sobre el botón de Play.


`
db.users.insert([
  { _id: "1", name: "Renato Cacho", rides: 10  },
  { _id: "2", name: "Fulano de Tal", rides: 20 },
  { _id: "3", name: "Perengano Glez", rides: 19 },
  { _id: "4", name: "Rafaelo Gimenez" , rides: 25 },
  { _id: "5", name: "Angela Aguas", rides: 33 },
  { _id: "6", name: "Anastasia Mercado", rides: 5 },
  { _id: "7", name: "Clementina Ramirez", rides:  10},
  { _id: "8", name: "Anastasia Ruiz", rides: 0 },
  { _id: "9", name: "Arnulfa Guzman", rides: 0 },
  { _id: "10", name: "Godino Bea", rides: 0 },
  { _id: "11", name: "Diego De ceballos", rides: 0 }
  ])
`

Listo todos los nombres:

`
db.users.find({}, {name:1, _id:0})
`

Listo documentos con rides > 10

db.users.find({rides: {$gt: 10}})