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

