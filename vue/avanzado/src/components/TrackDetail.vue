<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text.centered">
        <figure class="media-left">
          <p class="image">
            <img :src="track.album.images[0].url" alt="image">
          </p>
          <p>
            <a class="button is-primary is-large">
              <span class="icon" @click="selectTrack">▶</span>
            </a>
          </p>
        </figure>
      </div>

      <div class="column is-8">
        <div class="panel">
          <div class="panle-heading">
            <h1 class="title">{{ track.name }}</h1>
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
              <nav class="level">
                <div class="level-left">
                  <a class="level-item"></a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import trackServices from '@/services/track'
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [ trackMixin ],
    data () {
      return {
        track: {}
      }
    },

    created () {
      const id = this.$route.params.id
      trackServices.getById(id)
        .then( res => {
          console.log(res)
          this.track = res
        })
    }
  }
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>