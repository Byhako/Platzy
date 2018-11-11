# Maria DB
sudo service mysql start
/etc/init.d/mysql start

service mysqld stop
/etc/init.d/mysqld stop


En archivo /etc/mysql/my.cnf, agregar esta linea: 
*socket        = /var/run/mysqld/mysqld.sock*

1. Nuevo usuario:
  `sudo mysql -u root`

2. Crear nuevo usuario:
  `CREATE USER 'test'@'localhost' IDENTIFIED BY  'contraseña';`

3. Crear nueva base de datos:
  `CREATE DATABASE IF NOT EXISTS  'test-db';`

4. Otorgar privilegios:
  `GRANT ALL PRIVILEGES ON  'test-db' . * TO  'test'@'localhost';`

### Comandos

> SHOW databases;
> USE miBaseDeDatos;
> SHOW tables;
> SELECT database();

> SHOW warnings;
> SELECT * FROM tabla;
> DESCRIBE tabla
> SHOW FULL COLUMNS FROM tabla


+ *CREATE:* permite crear nuevas tablas o bases de datos.
+ *DROP:* permite eliminar tablas o bases de datos.
+ *DELETE:* permite eliminar registros de tablas.
+ *INSERT:* permite insertar registros en tablas.
+ *SELECT:* permite leer registros en las tablas.
+ *UPDATE:* permite actualizar registros seleccionados en tablas.
+ *GRANT OPTION:* permite remover privilegios de usuarios.


### Tipos de tablas.

*MyISAM*

+ Las que se usan mucho, mucho acceso a disco, crecimiento rapido

+ Bloqueo de tabla
+ Aumento del rendimiento si nuestra aplicación realiza un elevado número de consultas “Select”.
+ Las tablas pueden llegar a dar problemas en la recuperación de datos.
+ Permite hacer búsquedas full-text
+ Menor consumo memoria RAM
+ Mayor velocidad en general a la hora de recuperar datos.
+ Ausencia de características de atomicidad ya que no tiene que hacer comprobaciones de la integridad referencial, ni bloquear las tablas para realizar las operaciones, esto nos lleva como los anteriores puntos a una mayor velocidad.

*InnoDB*

+ robustas de crecimiento lento.

+ Bloqueo de registros
+ Soporte de transacciones
+ Rendimiento
+ Concurrencia
+ Confiabilidad
+ Permite hacer búsquedas full-text (mysql >= 5.6)


## Buenas practicas.

Cada tabla se llama con el plural del sustativo que se usa.

### **CREATE**

```
CREATE TABLE IF NOT EXISTS books(
  book_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  author_id INTEGER UNSIGNED,
  title VARCHAR(100) NOT NULL,
  `year` INTEGER UNSIGNED NOT NULL DEFAULT 1900,
  language VARCHAR(2) NOT NULL DEFAULT 'es' COMMENT 'ISO 639-1 Language',
  cover_url VARCHAR(500),
  price DOUBLE(6,2) NOT NULL DEFAULT 10.0,
  sellable TINYINT(1) DEFAULT 1,
  copies  INTEGER NOT NULL DEFAULT 1,
  description TEXT
);

CREATE TABLE IF NOT EXISTs authors(
  author_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  nationality VARCHAR(3)
);

author_id INTEGER NOTNULL,
FOREIGN KEY (author_id) REFERENCES authors(author_id)

CREATE TABLE IF NOT EXISTs clientes(
  client_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  birthdate DATETIME,
  gender ENUM('M', 'F', 'ND') NOT NULL,
  active TINYINT(1) NOT NULL DEFAULT 1,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "yyyy-mm-dd hh:mm:ss"
  uptaded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTs operations(
  operation_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  book_id INTEGER UNSIGNED NOT NULL,
  client_id INTEGER UNSIGNED NOT NULL,
  `type` ENUM('prestado', 'devuelto', 'vendido'),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  finshed TINYINT(1) NOT NULL
);

```

### **INSERT**

INSERT INTO  tabla(columnas) VALUES(valores)

```
INSERT INTO authors(author_id, name, nationality) VALUES('', 'Juan Rulfo', 'MEX');
INSERT INTO authors(name, nationality) VALUES('Gabo', 'COL');
INSERT INTO authors VALUES('', 'Juan Gabriel Vazques', 'COL');

INSERT INTO clientes(client_id, name, email, birthdate, gender, active) VALUES
  (1,'Maria Dolores Gomez','Maria Dolores.95983222J@random.names','1971-06-06','F',1),
  (2,'Adrian Fernandez','Adrian.55818851J@random.names','1970-04-09','M',1),
  (3,'Maria Luisa Marin','Maria Luisa.83726282A@random.names','1957-07-30','F',1),
  (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1);

INSERT INTO clientes(client_id, name, email, birthdate, gender, active) VALUES
  (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1)
  ON DUPLICATE KEY IGNORE ALL;

Existe pero nunca usar IGNORE ALL, porque si hay algun error lo ignora y continua con la ejecución.

INSERT INTO clientes(client_id, name, email, birthdate, gender, active) VALUES
  (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1)
  ON DUPLICATE KEY UPDATE

UPDATE -> si encuentras llave duplicada, actualiza el valor de la tabla con este nuevo.

INSERT INTO clientes(client_id, name, email, birthdate, gender, active) VALUES
  (4,'Pedro Sanchez','Pedro.78522059J@random.names','1992-01-31','M',1)
  ON DUPLICATE KEY UPDATE active = VALUES(active)

UPDATE -> si encuentras llave duplicada, actualiza el valor de la tabla con este nuevo.
key = VALUES(key) -> actualiza el valor de key en la tabla con el que envio.



```
#### **querys anidados**




### **SELECT**

```
select * from clientes where client_id = 4;
TIP:
select * from clientes where client_id = 4\G

presenta los datos de manera columna.


```