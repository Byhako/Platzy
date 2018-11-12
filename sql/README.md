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

Supongamos un csv con:

El laberinto de la soledad, Octavio Paz, 1952
Vuelta al laberinto, Octavio Paz, 1960

*Query a mano*
INSERT INTO books(title, author_id) VALUES('El laberinto de la soledad', 6);

INSERT INTO books(title, author_id, `year`)
VALUES('Vuelta al laberinto',
  (SELECT author_id FROM authors WHERE name = 'Octavio Paz' LIMIT 1), 1960
);


### **Cargar archivo sql desde terminal**

sudo mysql -u root < all_schema.sql

sudo mysql -u root -D pruebaplatzi < all_schema.sql


### **SELECT**

```
select * from clientes where client_id = 4;
TIP:
select * from clientes where client_id = 4\G

presenta los datos de manera columna.


SELECT name FROM clients WHERE gender = 'M' LIMIT 10;

SELECT YEAR(birthdate) FROM clients;

SELECT NOW();  ->  fecha actual del pc

SELECT name, YEAR(NOW()) - YEAR(birthdate) FROM clients;

SELECT name FROM clients WHERE name LIKE '%Saave%';

SELECT name, email, YEAR(NOW()) - YEAR(birthdate) AS Edad , gender
FROM clients WHERE gender = 'F' AND name LIKE '%Lop%';

SELECT count(*) FROM books;


SELECT * FROM authors WHERE author_id <=5;
SELECT * FROM books WHERE author_id BETWEEN 1 AND 5;
SELECT book_id, author_id, title FROM books WHERE author_id BETWEEN 1 AND 5;
```

### **JOIN**

```
SELECT b.book_id, a.name, b.title
FROM books as  b
JOIN authors as a
  ON a.author_id = b.author_id
WHERE a.author_id BETWEEN 1 AND 5;



SELECT c.name, b.title, a.name, t.type
FROM transactions AS t
JOIN books AS b
  ON t.book_id = b.book_id
JOIN clients AS c
  ON t.client_id = c.client_id
JOIN authors as a
  ON b.author_id = a.author_id
WHERE c.gender = 'F'
 and t.type IN  ('sell', 'lend');
```

### **LEFT JOIN**

Si un autor no tiene libros, aun asi lo muestra como NULL, el solo JOIN no muestra las "no coincidencias"

```
SELECT a.author_id, a.name, a.nationality, b.title, COUNT(b.book_id)
FROM authors AS a
LEFT JOIN books AS b
ON b.author_id = a.author_id
WHERE a.author_id BETWEEN 1 AND 5
GROUP BY a.author_id
ORDER BY a.author_id desc;

```


### CASOS

+ ¿Que nacionalidades hay?

SELECT nationality FROM authors
GROUP BY nationality;

SELECT DISTINCT nationality FROM authors;

+ ¿Cuantos autores hay de cada nacionalidad?

SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
AND nationality NOT IS ('RUS')
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;


+ ¿Cual es el promedio/desviacion estandar del precio de los libros?

SELECT a.nationality, COUNT(book_id) AS libros, AVG(price) AS prom, STdDEV(price) AS std
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
GROUP BY a.nationality
ORDER BY libros DESC


+ ¿Cual es el precio max/min de un libro?

SELECT a.nationality, MAX(price), MIN(price)
FROM books AS b
JOIN authos AS a
ON a.author_id = b.author_id
GROUP BY nationality

+ Reporte final

SELECT c.name, t.type, b.title,  
CONCAT(a.name, ' (', a.nationality, ')' ) AS author,
TO_DAYS(NOW()) - TO_DAYS(t.created_at) AS ago 
FROM transactions AS t
LEFT JOIN clients AS c
ON c.client_id = t.client_id
LEFT JOIN books as b
ON  b.book_id = t.book_id
LEFT JOIN authors As a
ON b.author_id = a.author_id

### **UPDATE Y DELETE**

DELETE FROM authors WHERE author_id = 2 limit 1;

UPDATE table
SET [columna = valor]
WHERE [condiciones]
LIMIT 1;


UPDATE clients
SET active = 0
WHERE client_id = 80
LIMIT 1;

TRUNCATE tabla -->  vacia contenido de la tabla.


SELECT COUNT(book_id), 
SUM(IF(year < 1950, 1, 0)) AS '< 1950',
SUM(IF(year >= 1950, 1, 0)) AS '> 1950'
FROM books;

SELECT nationality, COUNT(book_id), 
SUM(IF(year < 1950, 1, 0)) AS "< 1950",
SUM(IF(year >= 1950 and year < 1990, 1, 0)) AS "< 1990",
SUM(IF(year >= 1990 and year < 2000, 1, 0)) AS "< 2000",
SUM(IF(year >= 2000, 1, 0)) AS "< hoy"
FROM books AS b
JOIN authors AS a
ON a.author_id = b.author_id
WHERE a.nationality IS NOT NULL
GROUP BY nationality;


### Versionar el esquema de las tablas.


mysqldump -u root -p -d pruebaplatzi > esquema.sql

-d -->  sin datos, guarda solo el esquema.