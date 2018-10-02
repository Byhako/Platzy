<template lang="pug">
  #app
    myheader
    myfooter
</template>

<script>
import myfooter from './components/Footer.vue'
import myheader from './components/Header.vue'

export default {
  name: 'app',
  components: { myfooter, myheader },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';


</style>
