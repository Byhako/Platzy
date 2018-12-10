### SCHEMA

Los types o tipos de datos que pueden usarse en un schema son:

+ Scalars
+ Objects
+ Enums
+ Interfaces
+ Unions

#### Scalars

Nos sirven para definir la mayoría de propiedades de nuestras entidades.

+ Int: Son números enteros. Solamente recibe números enteros como un valor válido
+ Float: Números de punto flotante
+ String: Cadenas de caracteres
+ Boolean: True or False
+ ID: Es un identificador único

#### Objects

El Type Objects permite definir entidades

```
type Curso {
  id : ID!
  descripcion: String
  profesores: [Profesor]
  rating: Int
}

type Profesor {
  nombre: String
  edad: Int
  tieneMascota: Boolean
}
```

El signo ! indica que el campo es requerido.

#### Enums

Enum es un tipo que nos permite definir algo que puede tomar el valor de una lista de opciones.

```
enum Tipo {
  PROFESOR
  ESTUDIANTE
}
```

#### Interface

Proporciona la capacidad de describir campos que se comparten en diferentes tipos, es la definición de campos requeridos que sabemos que todas las implementaciones se van a cumplir, si en un futuro necesitáramos que todas las implementaciones de perfil tuvieran un nuevo campo, solamente debemos agregarlo a la Interface.

```
interface Perfil {
  nombre: String!
  email: String!
  edad: Int!
}

type PerfilFB implements Perfil {
  nombre: String!
  email: String!
  amigos: [Usuario]
}
```

#### Union

UNION es parecido al operador lógico or, es decir retorna todos los resultados que cumplan con alguna de las opciones. Aquí la palabra clave es O.

En el ejemplo búsqueda retorna todos los resultados que sean Amigo o Lugar o Evento… etc.

Union permite agrupar types

```
union Busqueda = Amigo | Lugar | Evento | Pagina
```

### Modificadores de tipo

+ Requerido: Signo de admiración al final, y significa que ese campo no puede ser null
+ Corchetes: Para denotar que tenemos una lista de lo que sea que está en medio.
+ Tenemos también la posibilidad de hacer una lista requerida de la siguiente forma:

[string!]!

