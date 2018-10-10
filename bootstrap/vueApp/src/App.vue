<template lang="pug">
  #app
    myheader
    mycarrusel
    myoradores
    myubicacion
    myformulario
    myfooter

    // Modal
    #ModalCompra.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalCenterTitle', aria-hidden='true')
      .modal-dialog.modal-dialog-centered(role='document')
        .modal-content
          .modal-header
            h5#exampleModalCenterTitle.modal-title Adquirir Tickets
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            form.was-validated
              .form-row
                .col.form-group
                  .input-group.mb-3
                    .input-group-prepend
                      span#basic-addon1.input-group-text @
                    input.form-control(type='text', placeholder='Username', aria-label='Username', aria-describedby='basic-addon1')
                    .invalid-feedback
                      | Tu Username es incorrecto, ingrésalo nuevamente
              .form-row
                .col.form-group
                  label.text-platzi-modal(for='inputPassword5') Password
                  input#inputPassword5.form-control(type='password', aria-describedby='passwordHelpBlock', placeholder='Password')
                  .invalid-feedback
                    | Tu passwaor es incorrecto
              .form-row
                .col.form-group
                  .form-check
                    .custom-control.custom-checkbox.mb-3
                      input#customControlValidation1.custom-control-input(type='checkbox', required='')
                      label.custom-control-label(for='customControlValidation1') Acepto los términos y condicones del sorteo
                      .invalid-feedback   Debes aceptar los términos y condiciones para acceder al sorteo.
            .alert.alert-success(role='alert')
              | Recibirás un correo de confirmación si sales sorteado.
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') Cancelar
            button.btn.btn-platzi(type='button') Comprar


</template>

<script>
import myfooter from './components/Footer.vue'
import myheader from './components/Header.vue'
import mycarrusel from './components/Carrusel.vue'
import myoradores from './components/Oradores.vue'
import myubicacion from './components/Ubicacion.vue'
import myformulario from './components/Formulario.vue'

export default {
  name: 'app',
  components: { myfooter, myheader, mycarrusel, myoradores, myubicacion, myformulario },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .btn-platzi {
    background-color: #97c93e;
    color: white;
  }

 .btn-platzi:hover {
    background-color: #82ad36;
    }
</style>
