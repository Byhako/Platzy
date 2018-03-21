**DML** es un lenguaje procedimental declarativo, un conjunto de instrucciones que nos apoyarán con el proceso de construcción de la base de datos.

En **DDL**, vamos a especificar el esquema de la base de datos; diccionario de datos, restricciones de integridad y autorizaciones.

##Bases de datos SQL

+ La **indexación** funciona como un indice de un libro o de un temario, nos dice donde encontramos un tema y en que pagina.
+ La indexación en SQL se hace por medio de una estructura de arbol, esta nos permite hacer busquedas.
+ Existe el problema que cuando se buscan tipos de datos que no estan necesariamente estructurados en una estructura de datos se busca desde el primer dato hasta el ultimo.
+ Ejemplos; PostgreSQL, MariaDB.

##Bases de Datos No SQL

+ La indexación funciona con objetos JSON, no necesariamente funciona como un arbol, se pueden hacer indices dividiendo los objetos por sus caracteristica y particularidades.
+ Ejemplos; MongoDB, Cassandra.

##Bases de datos Analíticas y de Bigdata

+ Ejemplos; Hadoop, Hortonworks, Spark

##Bases de datos basadas en aceleración

+ Son bases de datos muy rápidas que sin embargo no tienen persistencia.
+ Ejemplos; Redis, neo4j, Kinetica.

##Formas de usos en las bases de datos:

+ On premise open source, bases de datos de formato empresarial u opensource instalada en nuestra maquina sin una gran infraestructura.
+ Licenciamiento por cores o sockets, se paga dependiendo de ciertas características; como el hardware en el que va a correr.
+ Licenciamiento modular, se paga por funcionalidades o modulos para necesidades diferentes.
+ Pago por uso a través de SAAS(Software As A Service) o PAAS (Platform As A Service). Es como adquirir una renta y pagar por usar una base de datos.
+ Suscripción de nodos de computo, funciona para plataformas como Hadoop el cual no es centralizado y trabaja de forma distribuida, se paga por nodo utilizado.

## SQL. Structured Query Language

+ sudo mysql -u root -p

###Conceptos básicos:

**Redundancia:** Datos duplicados o multiples archivos.
**Concurrencia:** Muchas personas accediendo al mismo archivo o dato.
**Aislamiento:** Realizar operaciones independientes entre cada uno de multiples archivos o datos.
**Integridad:** Restricciones en los valores al definir si estos son obligatorios, opcionales o si cumplen ciertas condiciones.
**Inconsistencia:** Duplicación de información, datos reales en el tiempo (al tener datos duplicados, si aplicamos cambios en un “lugar” en el otro lugar ese mismo dato no cambió).
Seguridad:** Sistemas de autenticación, directorios de seguridad, esquemas de seguridad y de autenticación internas.
**Acceso:** Roles, permisos, formatos y restricciones.
**Atomicidad:** Atributos minimos e indivisibles.

### DDL (Data definition language)

**Create table** La sintaxis es create table (nombre de la tabla), con este creamos una tabla nueva.
**Create view** Tendremos una vista que es una porción de la tabla.
**Create procedure** Podemos crear procedimiento e incluirle triggers que son acciones que se disparan en un momento especifico, ejemplo el pago de nómina el día indicado.
**Create index** Creamos un índice, o una llave primaria.
**Create schema** Creamos un esquema, un conjunto de tablas con algo en común como el esquema de aeropuerto y platzistore que son bases de datos diferentes pero que funcionan dentro de la misma base de datos.
**Alter table** Sintaxis, alter table (nombre de la tabla) y agregamos un nuevo atributo, le ponemos el nombre y además el tipo de dato y la longitud, de la misma forma alteramos vistas Alter view y procedimientos Alter procedure .
**Drop table** Borramos la tabla, se pueden usar algunos comandos como cascade, para eliminar la tabla, la llave foránea y todo alrededor, de manera similar podemos eliminar vistas Drop view

### DML (Data manipulation language)

**Select** Selecciona uno o muchos atributos de una o muchas tablas.
**Join** Combina por conjuntos, intersección, a un lado o todo.
**Insert** Inserta en una tabla una nueva tupla o registro (nuevos datos).
**Update** Actualiza un valor de un registro. (toda una columna dada una condición)
**Delete** Borra toda una fila.
**Replace** Cambia un único registro por otro.

###Bases de Datos no Relacionales (Not Only SQL)

**ACID** este concepto es uno de los pilares de las bases de datos relacionales.con el cual se asegura la integridad y consistencia de los datos a pesar de la concurrencia proporcionando un entorno seguro para las operaciones que realizan. Esta compuesto de los siguientes cuatro conceptos:

**Atomicidad:** En lo No-Relacional, generalmente estoy trabajando con múltiples nodos, si yo voy a ser una transacción que tiene que ver con el nodo a b y c y me falla el nodo c, yo voy a tener que hacer esa transacción y voy a tener que tener un tiempo de espera hasta que vuelva a trabajar esta conectividad esto lo puedo solucionar teniendo otro nodo c que puede estar en otro país y puede tener una replicación no sincrona sino asincrona. No en todas las base de datos que sean No-SQL vamos a poder cumplir este principio de atomicidad justamente porque no esta en un solo sistema sino que esta basando en diferentes nodos.

**Consistencia:** Podemos trabajar una base de datos que este distribuida en diferentes nubes internamente va a tener diferentes nodos, pueden estar en diferentes geografías y esto va a ser una replica asincrona, acá voy a escribir un dato y después voy a hacer una replicación, no la voy a hacer en linea sin embargo los datos deben ser consistentes a ambos lados puede ser que se caiga mi nodo A y cuando valla a mirar el nodo A’ resulta que la información que había trabajado áca después de un commit; por ejemplo un dato había quedado en 100 y luego había pasado a ser 200 aca todavía es 100 en este ejemplo mi data todavía no es consistente, puedo trabajar estrategias de backed puedo hacer otro tipo de replicación interna para solucionar la consistencia pero no en todos los casos una base de datos No-SQL va a ser consistente.

**Aislamiento:** Un archivo no puede aislarse, todos los usuarios tienen una informacion unicamente parcial, ejemplo: dropbox crea copias diferentes de cada uno de los archivos asi modifique uno o varios pero se van a quedar varias copias este un breve ejemplo de lo que pasa con las base de datos No-SQL donde trabajo también objetos generalmente no están indexados, sino que trabajan bajo un esquema de inidices de JSON entonces lo que creo es una clave para acceder a ese archivo, cuando ese archivo es modificado lo unico que voy a tener es una informacion paracial y va a pasar lo mismo que puede pasar en esos documentos, por lo tanto no siempre una base de datos NO-Relacional tiene aislamiento.

**Durabilidad:** Recordemos que cuando vemos el principio de durabilidad mirabamos que las transacciones iban a perdurar en el tiempo sin embargo cuando estamos trabajando con una base de datos que No-Relacional; puedo tener varios nodos maestros, y puedo tener nodos de datos o nodos esclavos, resulta que puedo hacer una transacción en un momento el me puede decir que esta correcta, pero por un problema de comunicación con los nodos puede que la informacion quede a la mitad, muchas veces no puedo asegurar esa durabilidad en el tiempo, que hacen los bd No-relacionales, generalmente lo solucionan haciendo mas replicacion de estos nodos o esta informacion, para que asi este nodo falle o su comunicación falle yo pueda replicar desde un segundo nodo maestro ese dato que acabe de cambiar y pueda perdurar la transaccion en el tiempo.

### **CAP:** Consistency, Availability, Partition

+ **Consitencia** (consistency):
Cuando yo espero consistencia lo que espero es que yo pueda hacer una consulta a cualquiera de los nodos y me retorne un dato valido o que se correcto, o que por lo menos me entregue la ultima información que yo estaba esperando, por lo tanto la consistencia espera que yo no necesite preguntarle a cada uno de los nodos, si no que pueda preguntarle a este inclusive si la data que estoy buscando esta acá, los nodos y la estrategia de los nodos NO-SQL me debe permitir llegar a cualquier estructura de la bases de datos, así la data este distribuida como es el caso de este ejemplo.
+ **Disponibilidad** (Availability):
Cuando haga una solicitud no me va importar que nodos del sistema están up-time o down-time, puedo tener nodos down-time que no estén funcionando sin embargo, el conjunto de nodos que están funcionando dentro de mi arreglo de nodos me debe responder, un dato debe estar replicado por lo menos en tres nodos. Independientemente si mis nodos están arriba o están abajo me deben de dar una respuesta.
+ **Particionamiento** (Partition):
Esta palabra se va a parecer un poco a disponibilidad, porque básicamente el particionamiento es como yo parto esa información o esa estructura de datos por lo menos en 3 nodos, para evitar que se pierdan mensajes o no sean entregados. Esto soluciona que halla nodos en down-time, y que sin embargo yo pueda dividir un dato que estaba pasando acá que fuera a y que fuera a y lo tengo en un tercer nodo, cuando yo hago esto estoy teniendo tolerancia a esas fallas de comunicación.

**Entidad Fuerte:** La constituyen las tablas principales de la BD, que contienen los registros principales del sistema de información y que requieren de entidades o tablasauxiliares para completar su descripción o información.

**Entidad Debil:** Tablas auxiliares de una tabla principal a la que completan o complementan con la información de sus registros relacionados.

##Llaves

Las llaves nos dan acceso a los datos de una entidad, su notación es la de numeral #.

Las llaves tienen que ser irrepetibles y obligatorias, por lo tanto el ID puede ser una llave.

Una llave puede ser compuesta, esta se compone de 2 numeros, entre ID y Numero de seguro social. (Como un numero de teléfono móvil).

Las llaves **foráneas** son llaves que van a estar en nuestra tabla, que no necesariamente son nuestras llaves primarias pero van a permitir acceder a otra tabla donde ahí sean llaves primarias.

Una llave foranea tiene que ser llave primaria de una tabla (entidad).

Las llaves son fundamentales por que son obligatoriamente índices, los cuales permiten encontrar los datos cuando se necesitan de una forma rápida y ordenada.

## modelo entidad relacion

+ **Capa Conceptual:** En esta capa vamos a tener varias entidades, aún sin nombre definido. Las entidades van a tener cada una sus llaves primarias y sus atributos, además van a tener relaciones.
Para que existan las relaciones “muchos a muchos” se necesitan llaves foráneas en las entidades.
+ **Capa Lógica:** El modelo Entidad-Relación para poder procesar las relaciones “muchos a muchos” las va a partir en entidades que se llaman: Entidades Débiles.
+ **Capa Física:** Este modelo va a ser el paso del modelo lógico hacia la representación que ya va a tener la Base de Datos. En esta capa, ya cada uno de los datos empieza a entrar en las clasificaciones según su tipo de dato.

**Paso 1:** Vamos a identificar cuáles son las entidades que van a resolver nuestros problema.

**Paso 2:** Identificación de las relaciones de las entidades.

**Paso 3:** Diagramar entidades y relaciones.

**Paso 4:** Asignar atributos a las entidades.

Para hacer un buen ejercicio hay que pensar en:

+ ¿Que atributos voy a necesitar?
+ ¿Cual va a ser la codificación que voy a utilizar?
+ ¿Como los voy a trabajar dependiendo del tipo de dato?

**Paso 5:** Generar un diagrama conceptual (entidades, relaciones y atributos).
Las relaciones siempre se van a hacer en 2 sentidos (A con B y B con A).

**Paso 6: Modelo lógico**
Las relaciones se hacen por medio de entidades débiles, entre las entidades relacionadas, esto es porque no podemos generar muchas llaves foráneas en ambas entidades (fuertes).

En estas entidades debiles se usan ambas llaves primarias de las entidades (fuertes) que tenían relación.

En las entidades debiles no debería haber tipos de datos seriales, estas tendrían que ser integer, ya que las entidades debiles no tienen forma de tener consistencia con esa serialidad.

**Paso 7:** Identificar nuevos atributos que generan nuestras entidades débiles.

**Paso 8:** Construir el diagrama del modelo físico

**Paso 9:** Pasar al estándar de la base de datos (SQL)