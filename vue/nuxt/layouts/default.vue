<template>
  <div>
    <pm-header/>
    <nuxt/>
    <pm-footer/>
  </div>
</template>

<script>
import PmHeader from '../components/Header.vue'
import PmFooter from '../components/Footer.vue'

export default {
  components: { PmHeader, PmFooter}
}
</script>


<style lang="scss" scoped>

</style>

