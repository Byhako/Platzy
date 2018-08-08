<template>
  <div class="content">
    <p>
      <img :src="track.album.images[0].url" alt="imagen">
    </p>

    <p>
      <strong>{{ track.name }}</strong>
      <small>[{{ track.duration_ms }}]</small>
    </p>

    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        track: { }
      }
    },
    created () {
      // escuchamos el evento
      this.$bus.$on('set-track', track => this.track = track)
    }
  }
</script>

<style lang="scss" scoped>
img {
  width: 124px;
}
</style>