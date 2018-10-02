<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark#header
    .container
      a.navbar-brand(:href='url1')
        img(:src="logoPlatzi" alt="logoPlatzi")
        span  Conf Hawaii
      
      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      
      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item.active
            a.nav-link(:href='url1') La Conferencia
          
          li.nav-item
            a.nav-link(:href='url1') Los Oradores

          li.nav-item
            a.nav-link(:href='url1') Lugar y Fecha

          li.nav-item
            a.nav-link(:href='url1') Conviertete en Orador

          li.nav-item
            a.nav-link.text-platzi(:href='url1') Comprar tickets

</template>

<script>
import logoPlatzi from '@/assets/images/platzi-logo.png'

export default {
  name: 'myheader',
  data () {
    return {
      logoPlatzi,
      url1: '#'
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