<template>
  <div id="app">

    <pm-header/>
    <section class="section" >
      <nav class="navbar has-shadow">
      <div class="container">
        <input type="text" placeholder="Buscar"
          class="input is-large" v-model='searchQuery'>
        <a class="button is-info is-large" @click="search">Buscar</a>
        <a href="#" class="button is-danger is-large">&times;</a>
      </div>
      </nav>
      
      <div class="container encontrados">
        <p><small>{{ searchM }}</small></p>
      </div>

      <pm-loader v-show="isLoading"/>
      
      <div class="container" v-show="!isLoading">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="t in pistas" v-bind:key='t.id'>
          <pm-track :track="t"></pm-track>
          <!-- {{ t.name }} - {{ t.artists[0].name }} -->
        </div>
      </div>
      </div>
    </section>

    <pm-footer/>

  </div>
</template>

<script>
import trackServices from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader'

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader },
  data () {
    return {
      searchQuery: '',
      pistas: [],
      isLoading: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackServices.search(this.searchQuery)
        .then(res => {
          this.pistas = res.tracks.items
          this.isLoading = false
        })
    }
  },
  computed: {
    searchM () {
      return `Encontrados: ${this.pistas.length}`
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

.encontrados {
  margin-bottom: 20px;
}
</style>
