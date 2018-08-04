<template lang="pug">
  li
    h2
      a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>
  export default {
    name: 'Artist',
    props: ['artist']
  }
</script>


<style lang="stylus" scoped>
li
  display block
  margin 10px 15px
a
  color #42b983
</style>