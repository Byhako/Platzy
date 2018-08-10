<template>
  <div id="app">
    <pm-header/>
    <router-view/>
    <pm-footer/>
  </div>
</template>

<script>
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

.move-enter-active, .move-leave-active {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.move-enter, .move-leave-to {
  transform: translateX(100%);
}
</style>
