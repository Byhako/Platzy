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

+ *Update*: actualizar o modificar documentos que cumplan una condición dada, en una colección.

`
db.<colección>.updateMany(
        {<condiciones filtro>},
        { $set: <JSON valores a actualizar>},
        { multi: true}
)
`

Nótese el uso de la acción $set. Esta acción es para indicar a MongoDB que solo debe actualizar los campos o propiedades indicados explícitamente en el JSON pasado como parámetro. Si no se coloca este modificador, se sustituiría el documento completo (o documentos coincidentes) por el JSON referido.

+ *Delete*: eliminar los documentos que cumplan con una condición indicada, en una colección.

`
db.<colección>.deleteMany(
        {<condiciones filtro>}
)
`

*Importante*: Si no se especifica la condición filtro, se corre el riesgo de borrar accidentalmente todos los documentos contenidos en la colección.






# INSERCIÓN Y LECTURA EN MONGO DB

La acción de inserción en MongoDb puede realizarse de varias formas, usando los distintos métodos que mongoDb ofrece:

## Insert:

`
db.collection.insert(
    <document or array of documents>
    {
      writeConcert: {w: <value>, j: <boolean>, wtimeout: <number>},
      ordered: <boolean>
    }
  )
`

El primer parámetro () hace referencia al JSON o arreglo de JSONs que se almacenarán en la base de datos.

El segundo parámetro será un JSON opcional con los modificadores del método.

WriteConcern describe la garantía con la que MongoDB ha hecho una escritura, es decir garantiza que se ha almacenado el (ó los) documento(s).

MongoDB ofrece diferentes niveles de write concern que pueden usarse según las necesidades de la aplicación, además en MongoDB es el cliente el que puede ajustar este nivel en función de si le interesa rendimiento o asegurar persistencia.

La opción w se usa para solicitar el reconocimiento de que la operación de escritura se ha propagado a un número específico de instancias mongod o a instancias mongod con etiquetas especificadas.


*W* puede tomar los siguientes valores:


Solicita el reconocimiento de que la operación de escritura se ha propagado al número especificado de instancias mongod. Por ejemplo:

+ w: 1
Solicita el reconocimiento de que la operación de escritura se ha propagado a un servidor mongod independiente o al primario en un conjunto de réplicas.
este es el valor predeterminado.

+ w: 0
No solicita verificación posterior de la operación de escritura. Sin embargo, w: 0 puede devolver información sobre excepciones o errores de red a la aplicación.

Los números mayores que 1 son válidos sólo para que los conjuntos de réplicas soliciten el reconocimiento de un número específico de miembros, incluido el primario.

"Majority"

Solicita el reconocimiento de que las operaciones de escritura se han propagado a la mayoría de los nodos, incluido el primario.


Solicita el reconocimiento de que las operaciones de escritura se han propagado a un miembro del conjunto de réplicas con la etiqueta especificada.

La opción j es usada para solicitar el reconocimiento de que la operación de escritura se ha escrito en el “journal” de mongoDb.

¿Qué es el journal?

Un registro de transacciones binario secuencial utilizado para llevar la base de datos a un estado válido en el caso de un cierre inesperado del servidor. MongoDB habilita el registro del journal de manera predeterminada para las versiones de 64 bits a partir de la versión 2.0 en adelante. El journal existe como archivos en el directorio de datos del servidor.

La opción wtimeout se usa para especificar un límite de tiempo para evitar que las operaciones de escritura se bloqueen indefinidamente.

Esta opción espera el límite de tiempo en milisegundos, y solo es aplicable para valores w mayores que 1.

wtimeout hace que las operaciones de escritura vuelvan con un error después del límite especificado, incluso si el problema de escritura requerido eventualmente tendrá éxito. Cuando estas operaciones de escritura regresan, MongoDB no deshace las modificaciones exitosas de datos realizadas antes de que los reconocimientos de escritura excedan el límite de tiempo de espera.

Para información más detallada de writeconcern: https://docs.mongodb.com/manual/reference/write-concern/

## insertOne

`
db.collection.insertOne(
    <document>
    {
      writeConcert: {w: <value>, j: <boolean>, wtimeout: <number>},
    }
  )
`

De forma similar que insert, insertOne recibe el JSON del documento a insertar como primer parámetro, pero como segundo solo admite writeConcern.

La diferencia con insert es que éste método sólo admite un documento y no un conjunto de documentos a insertar.

Mas detalles: https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#db.collection.insertOne

## insertMany

`
db.collection.insertMany(
    [<document1>, <document2>... ]
    {
      writeConcert: {w: <value>, j: <boolean>, wtimeout: <number>},
      ordered: <boolean>
    }
  )
`

A diferencia de insertOne, el método insertMany espera recibir un arreglo de JSONs.

Por defecto los documentos se insertan en orden.

Si el ordenamiento ordenado se establece en falso, los documentos se insertarán desordenadamente. El servidor puede reordenarlos posteriormente para aumentar el rendimiento. Como buena práctica las aplicaciones no deberían depender del orden de las inserciones.

El número de operaciones en cada grupo no puede exceder el valor del maxWriteBatchSize de la base de datos. A partir de MongoDB 3.6, este valor es de 100,000 escrituras.

#### En cuanto a la Lectura…

El método find recibe dos parámetros opcionales en forma de JSON: el primero representa el filtro y el segundo la proyección el cual determina qué campos se devuelven en los documentos coincidentes.

`
db.collection.find(
  <query document>,
  {field1: <value>, field2: <value>}    
)
`
Existen operadores que son palabras claves para controlar ciertos comportamientos de cada consulta.

Los operadores son claramente identificados por que son palabras clave precedidos por signos de pesos.

Por ejemplo realizar la búsqueda en donde el campo qty sea mayor al número 4:

`
db.collection.find({qty: { $gt: 4 }})
`

## Operadores de comparación:

$gt Coincide con los valores que son mayores que un valor especificado.
$eq Coincide con valores que son iguales a un valor especificado.
$gte Coincide con los valores que son mayores o iguales a un valor especificado.
$en Coincide con cualquiera de los valores especificados en una matriz.
$lt Coincide con los valores que son menores que un valor especificado.
$lte Coincide con los valores que son menores o iguales a un valor especificado.
$ne Coincide con todos los valores que no son iguales a un valor especificado.
$nin No coincide con ninguno de los valores especificados en una matriz.

https://docs.mongodb.com/manual/reference/operator/query-comparison/

## Operadores lógicos

$and une cláusulas de consulta con un AND lógico devuelve todos los documentos que coinciden con las condiciones de ambas cláusulas.
$not Invierte el efecto de una expresión de consulta y devuelve documentos que no coinciden con la expresión de consulta.
$nor une cláusulas de consulta con un NOR lógico devuelve todos los documentos que no coinciden con ambas cláusulas.
$or une cláusulas de consulta con un OR lógico devuelve todos los documentos que cumplen las condiciones de cualquiera de las cláusulas.

https://docs.mongodb.com/manual/reference/operator/query-logical/

## Operadores de elementos

$exists Coincide con documentos que tienen el campo especificado.
$type Selecciona documentos si un campo es del tipo de dato especificado.

https://docs.mongodb.com/manual/reference/operator/query-element/

## Operadores de Evaluación

$expr Permite el uso de expresiones de agregación dentro del lenguaje de consulta.
$jsonSchema Valide documentos con el esquema JSON dado.
$mod Realiza una operación de módulo en el valor de un campo y selecciona documentos con un resultado específico.
$regex Selecciona documentos donde los valores coinciden con una expresión regular especificada.
$text Realiza búsqueda de texto.
$where combina documentos que satisfacen una expresión de JavaScript.

https://docs.mongodb.com/manual/reference/operator/query-evaluation/

## Operadores Geoespaciales

$geoIntersects Selecciona geometrías que se intersecan con una geometría GeoJSON.
$geoWithin Selecciona geometrías que se encuentran dentro de una geometría GeoJSON
$near Devuelve objetos geoespaciales en la proximidad de un punto.
$nearSphere Devuelve objetos geoespaciales cerca de un punto en una esfera.

https://docs.mongodb.com/manual/reference/operator/query-geospatial/

## Operadores con arreglos

$all Coincide con las matrices que contienen todos los elementos especificados en la consulta.
$elemMatch Selecciona documentos si el elemento en el campo de matriz coincide con las condiciones especificadas.
$tamaño Selecciona documentos si el campo de matriz es un tamaño especificado.

https://docs.mongodb.com/manual/reference/operator/query-array/



## Introducción a cursores, proyecciones, limit y sort

En esta clase veremos algunos conceptos adicionales relacionados con la lectura o consulta de documentos en una colección con MongoDB.

*Queries*: son el mecanismo por el cual obtenemos los datos de una forma filtrada omitiendo la información que no consideramos relevante.

*Cursor*: es una conexión con el servidor que permanece abierta y permite iterar sobre los resultados de una consulta. Si no se específica un límite, MongoDB devolverá por defecto un máximo de 20 documentos.

*Proyecciones*: se utilizan para devolver un conjunto determinado de campos dentro de un documento.

*Limit*: es una función encadenable en una instrucción de MongoDB que nos permite delimitar los resultados devueltos por una consulta.

*Sort*: es una función encadenable que nos permite ordenar los resultados de una consulta.



## Aggregation

Agregación es el procesamiento de los resultados obtenidos en una consulta para realizar ciertos cálculos basados en la agrupación de documentos en base a un criterio específico.

Aggregation pipeline
Es la manera más sencilla de realizar operaciones de agregación mediante el uso de la función
db..aggregate().

Las agregaciones en MongoDB se realizan en dos fases:

+ *$match stage*: en esta etapa se proporcionan los filtros o las condiciones que dan forma a los resultados de la consulta sobre la cual se aplicarán los cálculos.

+ *$group stage*: es el segundo paso en el proceso de agregación, en el que se indican los campos por los que se hará la agrupación de los datos y cómo se almacenarán los resultados de los cálculos, que pueden ser: $sum (sumatoria), $avg (promedio), $first (primer valor), $last(último valor), entre otros.

Más información en la documentación oficial.

Hay dos formas adicionales de realizar procesos de agregación y son:

+ *db..mapReduce()*: es una función que permite a MongoDB iterar sobre un cursor e ir reduciendo el número de elementos, en base a una función que se suministra como parámetro. Similar a la forma en que trabaja el método reduce() en los arreglos de JavaScript.

+ *db..distinct(“”)*: es una función que extrae los valores únicos dada una propiedad específico en los documentos de una colección.



## Text-search

Otro elemento clave en las consultas dentro de MongoDB es la búsqueda de cadenas de texto dentro del contenido de las propiedades de tipo string en los documentos.

Este tipo de búsquedas requiere que la colección sobre la que se va a ejecutar haya sido previamente indexada. En otras palabras, que se le haya creado un índice por cada campo de texto que se quiera consultar. Esto permitirá a MongoDB realizar dichas búsquedas de forma más óptima.

La manera de crear un índice en MongoDB es la siguiente:
`
db.<coleccion>.createIndex({“<nombre del campo>”: “text”})
`

Y la manera de realizar búsquedas sobre este índice es similar a como hemos visto en clases pasadas, usando la función .find(), pero incluyendo el modificador $text de la siguiente forma:

`
db.<coleccion>.find({
  $text: {
    $search: “<cadena a buscar>”
  }
})
`


## Geospatial

MongoDB contempla la posibilidad de manejar datos que hacen referencia a posicionamiento geoespacial; esto es, coordenadas de ubicación de un punto en el globo terráqueo. Para ello MongoDB utiliza el estándar GeoJSON que es básicamente una convención de tipos predefinidos y un formato de coordenadas.

La sintaxis de un dato en formato GeoJSON es la siguiente:

`
...
<campo>: {
  type: <tipo de dato GeoJSON>,
  coordinates: [ <longitud>, <latitud> ]
}
...
`

La convención GeoJSON establece que cualquier dato de tipo geoespacial se debe definir como un objeto JSON que tenga obligatoriamente estos dos campos: type y coordinates en el formato indicado anteriormente.

Para efectos de nuestros ejemplos solo usaremos el tipo Point, pero hay otros tipos más que puedes consultar en la documentación oficial de GeoJSON.org para MongoDB.

Si posteriormente quisiéramos realizar búsquedas cobre un campo que hemos definido como GeoJSON, sería necesario crearle un índice de la siguiente manera:

`
db.<coleccion>.createIndex({
  <nombre del campo>: <tipo de indice>
})
`
Donde el tipo de índice puede ser 2dsphere o 2d.


## Backup MongoDB

MongoDB cuenta con mecanismos para gestionar el respaldo y la recuperación de los datos.

*mongodump*: es una instrucción que se ejecuta desde la línea de comandos en la terminal y permite exportar todo el contenido de una base de datos de MongoDB en una estructura de archivos externos y portables que pueden ser luego restablecidos en el mismo o en otro servidor.

*mongorestore*: es la instrucción que permite el restablecimiento de una base de datos de MongoDB a partir de los archivos generados con el comando mongodump.

Para poder ejecutar cualquiera de las dos instrucciones asociadas con la exportación o importación de bases de datos debemos verificar primero que hemos instalado debidamente MongoDB y que el servidor mongod está corriendo en el sistema.

La sintaxis de la instrucción que genera los archivos de respaldo es la siguiente:

`
mongodump --db <nombre de la base de datos>
`

Si no se especifica una carpeta destino en la que se han de generar los archivos de respaldo, los mismos serán creados en justo en la misma carpeta en la que hemos ejecutado la instrucción.

Los archivos generados por mongodump son básicamente de dos tipos: .json y .bson, estos formados ya los hemos descrito y comentado en clases anteriores.

Para recuperar la base de datos a partir de los archivos generados con mongodump ejecutamos la siguiente instrucción:

`
mongorestore --db <nombre de la base de datos> <ubicación de los archivos de respaldo>
`


## Seguridad y escalabilidad

En cuanto a los aspectos de seguridad, MongoDB, al igual que otros manejadores de datos SQL y NoSQL, incorpora políticas y mecanismos de autenticación (verificar la identidad del usuario) y autorización (permisos de acceso) de usuarios; sin embargo, cuando trabajamos de manera local, en un entorno controlado, o mediante el uso de la interfaz gráfica Robomongo, también de forma local, estos mecanismos no son exigidos por el manejador. Ya al pasar a entornos de producción sí deberemos tomar en cuenta muy seriamente estos aspectos e implementar políticas de seguridad formales para evitar accesos no autorizados o maliciosos.

En relación a la escalabilidad, MongoDB contempla la posibilidad de escalar de dos maneras, vertical y horizontalmente.

El escalado Vertical se refiere al aumento de la capacidad de un solo servidor en cuando a memoria RAM, espacio de almacenamiento o características de la CPU, entre otras. La limitación en el escalado vertical estará dado por las mismas limitaciones físicas del hardware en el que se ejecute el servidor.

El escalado Horizontal por otro lado, implica la distribución del conjunto de datos del sistema en distintos servidores. Esto permite solventar los problemas de la limitación de hardware ya que si quisiéramos crecer para adaptar nuestra base de datos a un mayor volumen de información, bastaría por incorporar al cluster de servidores, nuevos servidores e integrarlos a la estructura distribuida de los archivos de la base de datos, a este método de distribución se le llama Sharding o Fragmentación.

La técnica de Sharding aporta varias ventajas al performance de MongoDB ya que de esta manera se disminuye la carga dtrabajo en un único servidor y técnicamente no habría limitación de espacio de almacenamiento, entre otras.

