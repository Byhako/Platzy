import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import EventBus from '@/plugins/event-bus' // Plugin
import blur from '@/directives/blur' // Directive
import msTomn from '@/filters/ms2mn' // Filter
import routes from '@/routes'

Vue.use(EventBus)
Vue.use(blur)
Vue.use(msTomn)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({ 
  el: '#app', 
  render: h => h(App),
  router
 })
