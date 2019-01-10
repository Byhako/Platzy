## Instalando Postgres

sudo -i -u postgres

Lo que puedes hacer es asegurarte de que el servicio esté levantado:

`
$ ps aux | grep postgres
`

Si no obtienes resultados solo necesitarías levantar el servicio:

$ sudo service postgresql start

+ Actualización

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

_Creando un usiario y una base de datos_
```
postgres=# CREATE ROLE platzi WITH LOGIN PASSWORD 'platzi';
CREATE ROLE
postgres=# CREATE DATABASE verse;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE verse TO platzi;
GRANT
postgres=#  \quit
```
----------------------------------------------------------
## Ansible

https://www.ansible.com

https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-apt-debian

$ ansible --version

## vagrant

https://www.vagrantup.com/downloads.html
$ vagrant -v





+ Ava.js es un test runner que permite definir cada uno de los tests de nuestra app y soporta ECMAScript 
  https://github.com/avajs/ava-docs/blob/master/es_ES/readme.md



### Algunos modulos:

+ inquirer: Permite hacer preguntas en consola, y tomar decisiones con las respuestas.
+ chalk: Estetica para los strings que se arrojan en consola.
+ ava:  Para realizar pruebas unitarias.
+ defaults: para definir valores por defecto en los test
+ nyc: test coverage.  --reporter=lcov --> es para generar el reporte en html
+ proxyquire:  Para sobre-escribir funciones de un modulo traido con require.
+ sinon: sinon.spy(), funcion especifica que permite hacerle preguntas, 
Test coverage es una técnica que nos permite ver si los test que se han creado están cubriendo la totalidad del código de nuestra aplicación. Nos informa mediante porcentaje que cantidad de codigo esta siendo cubierto con el set de pruebas definidas. 