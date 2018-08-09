const trackMixin = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      this.$emit('select', this.track.id)

      // para enviar cancion al componente player
      this.$bus.$emit('set-track', this.track)
    }
  }
}

export default trackMixin
