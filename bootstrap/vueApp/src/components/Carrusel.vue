<template lang="pug">
  main#main
    #carouselExampleControls.carousel.slide(data-ride='carousel' data-pause="false")
      .carousel-inner
        .carousel-item.active
          img.d-block.w-100(:src='hawaii', alt='hawaii')
        .carousel-item
          img.d-block.w-100(:src='hawaii2', alt='hawaii2')
        .carousel-item
          img.d-block.w-100(:src='hawaii3', alt='hawaii3')
      
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
  
</style>