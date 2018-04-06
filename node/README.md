## Postgres

segun como dice en la pagina oficial:

https://www.postgresql.org/download/linux/debian/

ejecutamos:

```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
  sudo apt-key add -
sudo apt-get update
```

y luego:

```
apt-get install postgresql-9.6
```

Tambien debemos instalar postgresql-server, lo realice desde synaptic.

Para trabajar en la consola **interactiva** usamos:

```
sudo -u postgres psql
```

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

