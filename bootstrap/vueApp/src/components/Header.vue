<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.sticky-top#header
    .container
      a.navbar-brand(href='#')
        img(:src="logoPlatzi" alt="logoPlatzi")
        span  Conf Hawaii

      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbar', aria-controls='navbar', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon


      
      #navbar.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item
            a.nav-link(href='#main') La Conferencia
          
          li.nav-item
            a.nav-link(href='#oradores') Los Oradores

          li.nav-item
            a.nav-link(href='#place-time') Lugar y Fecha

          li.nav-item
            a.nav-link(href='#conviertete-en-orador') Conviertete en Orador

          li.nav-item
            a.nav-link.text-platzi(href='#' data-toggle="modal" data-target="#ModalCompra") Comprar tickets

</template>

<script>
import logoPlatzi from '@/assets/images/platzi-logo.png'

export default {
  name: 'myheader',
  data () {
    return {
      logoPlatzi
    }
  }
}
</script>

<style lang="scss" scoped>
  #header img {
    width: 80px;
  }

  .text-platzi {
    color: #97c93e !important;;
  }
  
</style>