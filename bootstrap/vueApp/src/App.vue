<template lang="pug">
  #app
    myheader
    mycarrusel
    myoradores
    myubicacion
    myformulario
    myfooter
</template>

<script>
import myfooter from './components/Footer.vue'
import myheader from './components/Header.vue'
import mycarrusel from './components/Carrusel.vue'
import myoradores from './components/Oradores.vue'
import myubicacion from './components/Ubicacion.vue'
import myformulario from './components/Formulario.vue'

export default {
  name: 'app',
  components: { myfooter, myheader, mycarrusel, myoradores, myubicacion, myformulario },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';


</style>
