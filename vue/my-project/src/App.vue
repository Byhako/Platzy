<template lang="pug">
#app
  img(src='./assets/logo.png')
  h1 Platzi Music
  select(v-model="selectedCountry")
    option(v-for="country in countries" v-bind:value="country") {{ country }}
  Loader(v-show="loading")
  ul
    Artist(
      v-for="artist in artists"
      v-bind:artist="artist"
      v-bind:key="artist.mbid"
    )

</template>

<!-- ***************************************************************** -->
<script>
import getArtist from './Api/index'
import Artist from './components/Artist.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: ['Argentina', 'Colombia', 'Mexico', 'Spain'],
      selectedCountry: 'Colombia',
      loading: true
    }
  },
  mounted () { this.refreshArtist() },
  components: {
    Artist,
    Loader
  },
  methods: {
    refreshArtist () {
      const self = this
      this.loading = true
      getArtist(this.selectedCountry)
        .then(function (artists) {
          self.loading = false
          self.artists = artists

        })
        .catch( error => console.log(error) )
        .finally(() => self.loading = false )
    }
  },
  watch: {
    selectedCountry () { this.refreshArtist() }
  }
}
</script>
<!-- ***************************************************************** -->
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 30px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0
  display flex
  flex-wrap wrap
  justify-content center

</style>
