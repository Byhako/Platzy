<template lang="pug">
  section#conviertete-en-orador.pt-4.pb-4
    .container
      .row
        .col.text-uppercase.text-center
          small Conviértete en un
          h2 orador

      .row
        .col.text-center Anótate como orador para dar una charla 
          abbr(title='Charlas de 5 minutos' data-toggle="tooltip") ignite. 
          | Cuentanos de qué quieres hablar!

      .row
        .col.col-md-10.offset-md-1.col-lg-8.offset-lg-2.pt-2
          form
            .form-row
              .col-12.col-md-6.form-group
                input.form-control(type='text', placeholder='Nombre')
              .col-12.col-md-6.form-group
                input.form-control(type='text', placeholder='Apellido')

            .form-row
              .col.form-group
                textarea.form-control.form-control.lg(name="text" placeholder="¿Sobre que deseas hablar?")
                small.form-text.text-muted Recuerda incluir un título para tu charla.

            .form-row
              .col
                button.btn.btn-platzi.btn-block Enviar

</template>

<script>
import $ from 'jquery'

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

export default {
  name: 'formulario',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .btn-platzi {
    background-color: #97c93e;
    color: white;
  }
</style>