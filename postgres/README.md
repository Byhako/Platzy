sudo -i -u postgres

Lo que puedes hacer es asegurarte de que el servicio esté levantado:

`
$ ps aux | grep postgres
`

Si no obtienes resultados solo necesitarías levantar el servicio:

$ sudo service postgresql start
Actualización
Por razones de seguridad, Postgres no permite las conexiones remotas. Si deseas habilitarlas tienes que hacer lo siguiente:

En el archivo de configuración pg_hba.conf, agrega (red de ejemplo):

host all all 10.10.29.0/24 trust
En el archivo de configuración postgresql.conf, tienes que usar:

`
listen_addresses = '*'
`

Reiniciar el servicio:

`
$ sudo service postgresql restart
`

select name, setting from pg_settings where category='File Locations';

       name        |                 setting                  
-------------------+------------------------------------------
 config_file       | /etc/postgresql/9.6/main/postgresql.conf
 data_directory    | /var/lib/postgresql/9.6/main
 external_pid_file | /var/run/postgresql/9.6-main.pid
 hba_file          | /etc/postgresql/9.6/main/pg_hba.conf
 ident_file        | /etc/postgresql/9.6/main/pg_ident.conf


-------------------------------------------------

### Abrir un cliente de PostgreSQL

Para poder desarrollar este nanotutorial necesitamos tener disponible una sesión cliente en un servidor PostgreSQL. Para esto debemos iniciar el cliente con el siguiente comando:

`
psql -U postgres -h localhost -W
`

### Crear usuario

Para crear un usuario lo haremos con el siguiente comando:

`
CREATE USER nanotutoriales PASSWORD 'password';
`

### Eliminar usuario

Si deseamos eliminar un usuario debemos ejecutar el siguiente comando:

`
DROP USER nanotutoriales;
`

### ALTER ROLE

El manejo de roles en PostgreSQL permite diferentes configuraciones, entre ellas estan:

SUPERUSER/NOSUPERUSER. Super usuario, privilegios para crear bases de datos y usuarios.
CREATEDB/NOCREATEDB. Permite crear bases de datos.
CREATEROLE/NOCREATEROLE. Permite crear roles.
CREATEUSER/NOCREATEUSER. Permite crear usuarios.
LOGIN/NOLOGIN. Este atributo hace la diferencia entre un rol y usuario. Ya que el usuario tiene permisos para acceder a la base de datos a traves de un cliente.
PASSWORD. Permite alterar la contraseña.
VALID UNTIL. Expiración de usuarios.
Para cambiar la configuracion de un usuario o rol debemos ejecutar el siguiente comando.

`
ALTE ROLE <nombre del rol> WITH <opciones>
`

### Asignar permisos de super usuario a un usuario

El permiso de super usuario es el mas alto. Con este usuario se podrán administrar todos los objetos del motor de base de datos.

Para asignar este privilegio a un rol lo hacemos con el siguiente comando:

`
ALTER ROLE nanotutoriales WITH SUPERUSER;
`


### Cambiar la contraseña de un usuario

Para cambiar la contraseña de un usuario es necesario ejecutar el siguiente comando:

`
ALTER ROLE nanotutoriales WITH PASSWORD 'nuevopassword';
`

### Crear una base de datos con un usuario específico como propietario

Todas las bases de datos que creamos con un usuario que tenga los privilegios CREATEDB automáticamente asignan como propietario al usuario mismo. Si lo que queremos crear es un usuario limitado, la forma de crearlo con una base de datos específica será:

`
CREATE DATABASE nanotutoriales_website WITH OWNER nanotutoriales;
`

### Asignar todos los permisos a un usuario a una base de datos existente

Cuando recien hemos creado un usuario y queremos darle permisos a una base de datos existente, podemos utilizar el siguiente comando:

`
GRANT ALL PRIVILEGES ON DATABASE nanotutoriales_website TO nanotutoriales;
`

-------------------------------------------------


### Roles

+ Roles de inicio de sesion.
+ Roles de grupo

CREATE ROLE curso LOGIN PASSWORD 'clave';
SELECT * FROM pg_roles;
DROP ROLE curso;

+ Los roles de inicio pueden ser temporales.

CREATE ROLE curso LOGIN ENCRYPTED PASSWORD 'clave';
CREATE ROLE curso LOGIN ENCRYPTED PASSWORD 'clave' VALID UNTIL 'infinity';
CREATE ROLE curso LOGIN ENCRYPTED PASSWORD 'clave' VALID UNTIL '2019-8-1 00:00';

+ Permisos de rol.

  CREATEDB
  SUPERUSER
  CREATEROLE

CREATE ROLE curso LOGIN ENCRYPTED PASSWORD 'clave' CREATEDB;

Todos los permisos de contenedor, se los va a heredar a cualquier miembro del rol, excepto superuser, ese no se puede heredar.
CREATE ROLE contenedor INHERIT;

+ Para agregar alguien a un rol usamos la palabra "grant"
GRANT curso TO contenedor;

+ Para cambiar de un rol a otro:

SET ROLE curso;

CREATE DATABASE miBase TEMPLATE template1;

+ Para promover una base de datos a template:
UPDATE pg_database SET datistemplate=true WHERE database 'miBase' 


CREATE SCHEMA miSchema;

+ privilegios.

GRANT privilegio TO role WITH GRANT OPTION
GRANT ALL ON ALL TABLES IN SCHEMA miSchema TO curso;

+ Datos seriales.

CREATE SEQUENCE ejemplo;
SELECT NEXTVAL('ejemplo');

valor actual:

SELECT CURRVAL('ejemplo');

Resetear secuencia (inicia en 5)

SELECT SET('ejemplo', 5)

+ Tipos de datos.

tipo char - longitud fija
tipo varchar -tipo variable, toma unicamente el texto ingresado
text - similar a varchar pero sin especificar el numero de caracteres, limit = 1GB

SELECT SPLIT_PART('123-456-789', '-', 2) AS x;

SELECT STRING_TO_ARRAY('aaa.bbb.ccc', '.') AS y;

+ rangos

SELECT '(0,6)'::int8range;
SELECT '[2018-04-01,2018-06-07]'::datarange;

### Json

CREATE TABLE profiles (id SERIAL PRIMARY KEY, profile JSON);

INSERT INTO profiles (profile) VALUES ('{"name": "Mario", "tech": ["python", "ruby"]}');

INSERT INTO profiles (profile) VALUES ('{"name": "Nata", "tech": ["Biology", "Chemistry"]}');

SELECT JSON_EXTRACT_PATH_TEXT(profile, 'name') FROM profiles;

SELECT JSON_ARRAY_ELEMENTS(JSON_EXTRACT_PATH_TEXT(profile, 'tech')::json) FROM profiles;

### Jsonb

https://anthonysotolongo.wordpress.com/2015/04/13/jsonb-un-json-superior-en-postgresql/

CREATE TABLE profiles_b (id SERIAL PRIMARY KEY, profile JSONB);

INSERT INTO profiles_b (profile) VALUES ('{"name": "Nata", "tech": ["Biology", "Chemistry"]}');

### Documentos no estructurados.

CREATE EXTENSION hstore;

CREATE TABLE hprofiles (idserial PRIMARY KEY, profile hstore);

INSERT INTO hprofiles (profile) VALUES ('name=>Mario, ruby=>true, postgresql=>true');

INSERT INTO hprofiles (profile) VALUES ('name=>Jedun, javascript=>true, nodejs=>true');

SELECT * FROM hprofiles;  -- "name"=>"Mario", "ruby"=>"true", "postgresql"=>"true"
SELECT profile->'name'ASname, profile->'ruby'as ruby FROM hprofiles;
SELECT * FROM hprofiles WHERE (profile->'nodejs')::boolean;
SELECT * FROM hprofiles WHERE (profile->'nodejs')::boolean = true;
SELECT * FROM hprofiles WHERE profile @> 'nodejs=>true';

-- Trae el registro si existe alguna llave especifica.

SELECT * FROM hprofiles WHERE profile ? 'nodejs';

-- Trae el registo si existen las llaves especificadas en el array (and &).

SELECT * FROM hprofiles WHERE profile ?& ARRAY['ruby', 'postgresql'];

-- Trae el registo si existen al menos las llaves especificadas en el array (or &).

SELECT * FROM hprofiles WHERE profile ?| ARRAY['javascript', 'postgresql'];

-- Añade una nueva llave-valor en los registros actuales.

UPDATE hprofiles SET profile = profile || 'html5=>true'::hstore;

-- Elimina del campo profile los que tengan llave 'go'.

UPDATE hprofiles SET profile = delete(profile, 'go');

-- En un arreglo de text[] obtiene solo las keys.

SELECT akeys(profile) FROM hprofiles;  -- {name,ruby,html5,postgresql} ...

-- Por registros independientes, obtiene solo las keys.

SELECT DISTINCT skeys(profile) FROM hprofiles;

-- Convierte de hstore a json.

SELECT hstore_to_json(profile) FROM hprofiles;

-- {"name": "Mario", "ruby": "true", "html5": "true", "postgresql": "true"}



### Datos PostGIS

-- Maneja datos geolocalización.
-- Obtener la extension de postgis para trabajar con este tipo de campos.

CREATE EXTENSION postgis;

-- Point maneja la posicion X,Y.

CREATE TABLE hospitales (idserial PRIMARY KEY, location geography, position geometry(POINT, 4326), nametext);

INSERT INTO hospitales (name, location) VALUES ('Hospital Puerta de Hierro', ST_POINT(-6.3788, 53.2911));

INSERT INTO hospitales (name, location) VALUES ('Hospital Conocido', ST_POINT(-7.3497, 53.5346));

-- Mostrar la distancia de un punto determinado a los puntos que se encuentran actualmente.

SELECT name, ST_DISTANCE(location, ST_POINT(-6.237009, 53.34115)::geography) FROM hospitales;

-- Buscar un punto en un rango en particular.

SELECT name FROM hospitales WHERE ST_DWithin(location, ST_POINT(-6.237009, 53.34115)::geography, 100000);

-- Muestra los puntos x,y del campo numérico de location.

SELECT name, st_astext(location) FROM hospitales;  -- POINT(X,Y)

-- Genera la informacion en formato json

SELECT name, st_asgeojson(location) FROM hospitales;  -- {"type": "Point", "coordinates": [-6.3788, 53.2911]}

-- Genera la informacion en formato xml

SELECT name, st_askml(location) FROM hospitales;
