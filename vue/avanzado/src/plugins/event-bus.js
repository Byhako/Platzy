const eventBus = {}

// Recibe la instancia de Vue de la aplicacion que lo usa
// para inyectarlo dentro de los componentes
eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}

export default eventBus
