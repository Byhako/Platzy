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
        <div class="columns">
          <div class="column" v-for="t in pistas">{{ t.name }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- ******************************************************* -->
<script>
const pistas = [
  {name: 'muchacha', artist: 'Luis'},
  {name: 'corazon', artist: 'Luis'},
  {name: 'agua', artist: 'Tato'}
]

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
      this.pistas = pistas
    }
  },
  computed: {
    searchM () {
      return `Encontrados: ${this.pistas.lenght}`
    }
  }
}
</script>
<!-- ******************************************************* -->
<style lang="stylus" scoped>
@import '../node_modules/bulma-stylus/bulma.styl'

</style>