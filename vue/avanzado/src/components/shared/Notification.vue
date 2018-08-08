<template>
 <div class="container">
   <div class="columns">
     <div class="column is-5 is-offset-4">
       <div :class="Theme">
         <slot name="body"> Algo esta mal. ☹</slot>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    props: {
      theme: ''
    },
    computed: {
      Theme () {
        if (this.theme === 'error') {
          return "notification is-danger has-text-centered"
        } else {
          return "notification is-success has-text-centered verde"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.notification {
  margin: 3em auto 0;
}
.verde {
  margin: 2em auto 1em;
}
</style>