# avanzado

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## ciclo de vida

+ *beforeCreate:* se ejecuta justo después de la inicialización de la instancia.
+ *created:* se ejecuta cuando la instancia y los eventos, las computed properties, el data y los métodos están creados. Normalmente se utiliza para inicializar propiedades del objeto data con consultas HTTP Get.
+ *beforeMount:* se ejecuta justo antes de que se añada al DOM.
+ *mounted:* se ejecuta después de añadirlo al DOM. Se puede utilizar para inicializar librerías que dependan del DOM.
+ *beforeUpdate:* se ejecuta cuando el data cambia, pero el DOM aun no ha plasmado los cambios.
+ *updated:* se ejecuta después de que el data cambie y el DOM muestre estos cambios.
+ *beforeDestroy:* se ejecuta justo antes de eliminar la instancia.
+ *destroyed:* se ejecuta cuando la instancia, los eventos, directivas e hijos del componente se han eliminado. :heart

## Vue-Router

Tiene dos objetos:

+ $route: Tiene informacion de la ruta especifica, es decir, informacion como los parametros, la url ...

+ $router: Sirve para navegar programaticamente y para acceder a funcionalidades del router.

## Modifiers:

+ @keyup.enter
+ @keyup.tab
+ @keyup.delete (captures both “Delete” and “Backspace” keys)
+ @keyup.esc
+ @keyup.space
+ @keyup.up
+ @keyup.down
+ @keyup.left
+ @keyup.right