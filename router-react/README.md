##Tipos de Enrutadores
* **BrowserRouter.** Componente encargado de manejar el historial del navegador.
Utiliza el HTML5 history API.
Nos permite cambiar la ruta en la barra de navegación sin tener que recargar la página.
* **HachRouter.** Usa un hash al inicio de cada url.
* **MemoryRouter.** Mantiene el historial de búsqueda en memoria, perfecto para pruebas sin navegadores.
* **StaticRouter.** Nos sirve para renderizar una ruta específica, nunca cambia de direcciṕon y se puede usar en Server Side Render.
* **Native Router.** Pasa usar en React Native, el buen Leo recomienda React Navigation 😄


## NavLink

Es igual a Link, se suele usar para elementos de navegacion

* **activeClassName.** Clase de css para elemento activo
* **activeStyle.** Los estilos inline para el elemento activo
* **isActive.** Una función que se envía cuando una vista toma el foco o está activa
* **exact.** Rutas exactas
* **strict.** Rutas estrictas
* **location.** permite realizar comparaciones de rutas.

## Route

* **component:** Que componente quiero renderizar.
* **path:** En que ruta lo quiero renderizar. '/inicio'
* **render:** Alternativa a component.
* **children:** 
* **exact:** bool, renderiza componente solo si la ruta es igual a path.
    /inicio -->  si renderiza
    /inicio/otro  -->  no renderiza
* **strict:** bool, ruta debe ser en el navegador identica a como se declara en path.
    /inicio --> si renderiza
    /inicio/ --> no renderiza
* **sensitive:** si es case sensitive.
