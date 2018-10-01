<template lang="pug">
  #app
    grilla
</template>

<script>
import grilla from './components/grilla'

export default {
  name: 'app',
  components: { grilla },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';


</style>
