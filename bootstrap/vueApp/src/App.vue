<template lang="pug">
  #app
    myheader
    mycarrusel
    myoradores
    myfooter
</template>

<script>
import myfooter from './components/Footer.vue'
import myheader from './components/Header.vue'
import mycarrusel from './components/Carrusel.vue'
import myoradores from './components/Oradores.vue'

export default {
  name: 'app',
  components: { myfooter, myheader, mycarrusel, myoradores },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';


</style>
