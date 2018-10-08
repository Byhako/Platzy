<template lang="pug">
  main#main
    #carousel.carousel.slide(data-ride='carousel' data-pause="false")
      .carousel-inner
        .carousel-item.active
          img.d-block.w-100(:src='hawaii', alt='hawaii')
        .carousel-item
          img.d-block.w-100(:src='hawaii2', alt='hawaii2')
        .carousel-item
          img.d-block.w-100(:src='hawaii3', alt='hawaii3')
        
        .overlay
          .container
            .row.align-items-center
              .col-md-6.offset-md-6.text-md-right.text-center
                h1 Platzi Conf Hawaii
                p.d-none.d-md-block  Platzi Conf llega por primera vez a Hawaii! Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el furuto de internet. Ven a conocerlos.

                a.btn.btn-outline-light(href='') Quiero ser orador
                button.button.btn.btn-platzi Comprar tickets
      
</template>

<script>
import hawaii from '@/assets/images/hawaii.jpg'
import hawaii2 from '@/assets/images/hawaii2.jpg'
import hawaii3 from '@/assets/images/hawaii3.jpg'

export default {
  name: 'myheader',
  data () {
    return {
      hawaii,
      hawaii2,
      hawaii3,
      url1: '#'
    }
  }
}
</script>

<style lang="scss">
  #main .carousel-inner img {
    max-height: 70vh;
    object-fit: cover;
    filter: grayscale(70%);
  }

  #carousel {
    position: relative;
  }

  #carousel .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
  #carousel .overlay .container, 
  #carousel .overlay .row {
    height: 100%;
  }

  .btn-platzi {
    background-color: #97c93e;
    color: white;
  }

 .btn-platzi:hover {
    background-color: #82ad36;
    }
</style>