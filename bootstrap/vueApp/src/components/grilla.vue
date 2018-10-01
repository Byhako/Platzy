<template lang="pug">
  #app
    .container
      .row
        .col Columna
        .col Columna
        .col Columna
      .row
        .col Columna
        .col Columna

    .container
      .row
        .col-3 col 3
        .col-9 col 9
</template>

<style lang="scss">
  .container {
    background: lightblue;
  }
  .col {
    border: 1px dashed;
  }
</style>
