<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar"
            v-model='searchQuery'
          >
          <a 
            class="button is-info is-large"
            @click="search"
          >Buscar</a>
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
  </div>
</template>
<!-- ******************************************************* -->
<script>
import trackServices from './services/track'

export default {
  name: 'app',
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
<!-- ******************************************************* -->
<style lang="stylus" scoped>
@import '../node_modules/bulma-stylus/bulma.styl'

</style>