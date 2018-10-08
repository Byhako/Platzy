<template lang="pug">
  section#section.mt-4.mb-4
    .container
      .row
        .col.text-center.text-uppercase 
          small Conoce a los
          h2 oradores
      
      .row
        .col-sm-12.col-md-6.col-lg-4.mb-4
          .card
            img.card-img-top(:src='sacha', alt='sacha')
            .card-body
              h5.card-title Sacha Lifszyc
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.

        .col-sm-12.col-md-6.col-lg-4.mb-4
          .card
            img.card-img-top(:src='leonidas', alt='sacha')
            .card-body
              h5.card-title Leonidas Esteban.
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.

        .col-sm-12.col-md-6.col-lg-4.mb-4
          .card
            img.card-img-top(:src='freddy', alt='sacha')
            .card-body
              h5.card-title Freddy Vega
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.

        .col-sm-12.col-md-6.col-lg-4.mb-4
          .card
            img.card-img-top(:src='cvander', alt='sacha')
            .card-body
              h5.card-title Cristian Van Der H.
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.

  
</template>

<script>
  import sacha from '@/assets/speakers/sacha.jpg'
  import cvander from '@/assets/speakers/cvander.jpg'
  import freddy from '@/assets/speakers/freddy.jpg'
  import leonidas from '@/assets/speakers/leonidas2.jpg'
  
  export default {
    name: 'oradores',
    data () {
      return {
        sacha,
        leonidas,
        freddy,
        cvander
      }
    }
  }
</script>

<style lang="scss">
</style>