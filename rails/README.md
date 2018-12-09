gem install rails -v 5.2.0
rails new blog --database=postgresql
bundle install

rails g scaffold tasks task:string

-----------------------------------
### Generando base de datos
-----------------------------------

sudo service postgresql start
rake db:create

---------------------------------
### Iniciamos servidor de Rails
---------------------------------

rails s

