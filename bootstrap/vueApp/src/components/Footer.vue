<template lang="pug">
  footer#footer.pb-4.pt-4
    .container
      .row.text-center
        .col-12.col-md
          a(:href="url1") Preguntas frecuentes
        .col-12.col-md
          a(:href="url1") Contáctanos
        .col-12.col-md
          a(:href="url1") Prensa
        .col-12.col-md
          a(:href="url1") Términos y condiciones
        .col-12.col-md
          a(:href="url1") Privacidad
        .col-12.col-md
          a(:href="url1") Estudiantes

</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      url1: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer {
    background: linear-gradient(90deg, #1c3643, #273b47, 25%, #1e5372);
  }

  #footer a {
    color: white;
  }
</style>