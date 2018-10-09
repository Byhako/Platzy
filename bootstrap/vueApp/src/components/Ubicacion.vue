<template lang="pug">
  section#place-time
    .container-fluid
      .row
        .col-lg-6.col-md-12.pl-0.pr-0
          img(:src='honolulu' alt='honolulu')

        .col-lg-6.col-md-12.pt-4
          h2 Honolulu - Octubre 2019

          p Honolulu o Honolulú es la capital y localidad más grande del estado de Hawái, en los Estados Unidos. Honolulu es lamás sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana enla costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la isla (aproximadamente 600 km² de superficie).
          a.btn.btn-outline-light.mb-4(:href='wikiHonolulu' target="_blank") Conoce más

</template>

<script>
  import honolulu from '@/assets/images/honolulu.jpg'

  export default {
    name: 'ubicacion',
    data () {
      return {
        honolulu,
        wikiHonolulu: 'https://es.wikipedia.org/wiki/Honolulu'
      }
    }
  }
</script>

<style lang="scss">
  #place-time {
    background-color: #343a40;
    color: white;
  }

  #place-time img {
    max-width: 100%;
  }
  
</style>