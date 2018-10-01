<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="surname")
    button(v-on:click="format") Format
    button(@click="format") Format
    p Fullname: {{ fulname }}
    p Formatted Name: {{ formatName }}

    // display: none
    p(v-show="showValue") Mi valor

    // borra nodo del DOM
    p(v-if="showValue") Mi valor
    p(v-else-if="condicion") Otro valor
    p(v-else) Algo mas

    // iterador
    ul
      li(v-for="i in items") {{ i }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      surname: ''
      formatName: '-----',
      showValue: true,
      condicion: false,
      items: [1, 2, 3]
    }
  },

  computed: {
    fulname () {
      return `${this.name} ${this.surname}`
    }
  },

  watch: {
    name (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },

  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
