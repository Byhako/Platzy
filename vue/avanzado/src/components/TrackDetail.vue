<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <pm-track :track="track"/>
      </div>
    </div>
  </div>
</template>

<script>
  import trackServices from '@/services/track'
  import PmTrack from '@/components/Track'

  export default {
    components: { PmTrack },

    data () {
      return {
        track: {}
      }
    },

    created () {
      const id = this.$route.params.id
      trackServices.getById(id)
        .then( res => {
          console.log(res)
          this.track = res
        })
    }
  }
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>