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














