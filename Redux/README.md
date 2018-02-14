**Store** = Es la parte más importante de entender cuando estamos haciendo algo en Redux.

*Datos importantes del Store:*

+ Contiene el estado de la aplicación.
+ Se puede acceder al estado con el método getState()
+ Se puede actualizar el estado con el método dispatch(action)
+ Escucha cambios con el método subscribe(listener)
+ Deja de escuchar cambios retornando la función del método subscribe(listener)

- Reducer => Función pura que retorna el próximo estado.
- PreloadState / InitialState => Es el estado inicial de la aplicación, la primera carga, el llamado a una data. Puede ser cualquier tipo de dato.
- Enhancer => Función que puede extender redux con capacidades añadidas por librerías externas. Es opcional. Eg. Añadir las dev-tools.

__________________________________________________
En modo de desarrolo, esta super herramienta:

https://github.com/zalmoxisus/redux-devtools-extension
__________________________________________________

**Action** = Bloque de información que envía datos a la aplicación.

*Datos importantes:*

+ Se envían usando el método dispatch() del store.
+ Son la única fuente de información del store.
+ Son objetos planos de JavaScript.

**Reducer**

+ Modifican nuestro estado
+ Puede haber múltiples reducers en la aplicación y un solo store.
+ Devuelve el siguiente estado.

*Que no deben hacer*

+ Modificar los argumentos recibidos
+ Llamar a APIs (u otras tareas secundarias)
+ Llamar a funciones no puras como Date.now(), Math.random()

**Funciones puras**

Es un concepto de programación funcional, hace que el código sea más legible. Tienen las siguientes condiciones:

+ Dados los mismos datos de entrada, deben retornar el mismo resultado sin importar el número de veces que se llame.
+ No debe tener objetos secundarios.
+ El reducer se iguala a una función, esta función recibe dos parámetros que son el state y la action y en la función se debe definir que se hace con state y action; generalmente se valida con un switch.

### Flujo

+ Se establece un State (estado) inicial con el que se crea originalmente el store mediante el método createStore de redux.
+ el state inicial define los contenidos que se muestran en la UI mediante store.getState() y la función render().
+ mediante los elementos de la UI se dispara un evento que se captura mediante un listener (como onsubmit) y que invoca al store.dispatch() con una acción específica.
+ el Reducer recibe la acción(type y payload) enviada mediante el store.dispatch() y genera un nuevo estado que remplazará al estado inicial (o anterior).
+ el cambio del estado es detectado por el store y se ejecuta store.subscribe(handle) … con la función (handle) que manejará lo que sucede cuando ha cambiado el estado.
+ en la función (handle) recibida por store.subscribe(handle) se invoca la actualización de la UI a partir del nuevo estado creado.
+ queda establecido el nuevo estado(state) y queda de nuevo atento el evento (listener) en la UI.