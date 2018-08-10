<template>
  <div class="content" v-if="track && track.album">
    <p>
      <img :src="track.album.images[0].url" alt="imagen">
    </p>

    <p>
      <strong>{{ track.name }}</strong>
      <small>[{{ track.duration_ms | ms-to-mn }}]</small>
    </p>

    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    
    /*created () {
      // escuchamos el evento
      this.$bus.$on('set-track', track => this.track = track)
    }*/

    computed: {
      ...mapState(['track'])
    }
  }
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>