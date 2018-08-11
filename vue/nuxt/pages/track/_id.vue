<template>
  <div class="container" v-if="track && track.album">
    <div class="columns">
      <div class="column is-3 has-text.centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="image">
          </p>
          
        </figure>
      </div>

      <div class="column is-8">
        <div class="panel">
          <div class="panle-heading">
            <h1 class="title">{{ trackTitle }}</h1>
          </div>

          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(val, key) in track" v-bind:key="key">
                    <li>
                      <strong>{{ key }}:&nbsp;</strong>
                      <span>{{ val }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import trackServices from '../../plugins/track'

  export default {
    data () {
      return {
        track: {}
      }
    },

    asincData ({ params }) {
      const id = params.id

      return trackServices.getById(id)
        .then( res => {
          return { track: res }
        })
    },

    head () {
      return {
        title: this.track.name
      }
    }
  }
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
.button-bar {
  margin-top: 20px;
}
</style>