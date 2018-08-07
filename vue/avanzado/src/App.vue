<template>
  <div id="app">

    <pm-header/>

    <section class="section">
      <nav class="navbar has-shadow">
      <div class="container">
        <input type="text" placeholder="Buscar"
          class="input is-large" v-model='searchQuery'>
        <a class="button is-info is-large" @click="search">Buscar</a>
        <a href="#" class="button is-danger is-large">&times;</a>
      </div>
      </nav>
      
      <div class="container">
        <p small>{{ searchM }}</p>
      </div>

      <div class="container">
      <div class="columns">
        <div class="column" v-for="t in pistas">{{ t.name }} 
        - {{ t.artists[0].name }}</div>
      </div>
      </div>
    </section>

    <pm-footer/>

  </div>
</template>

<script>
import trackServices from './services/track'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader },
  data () {
    return {
      searchQuery: '',
      pistas: []
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackServices.search(this.searchQuery)
        .then(res => {
          this.pistas = res.tracks.items
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
@import '../node_modules/bulma/bulma.sass'

</style>
