<template>
  <div class="card" v-if="track && track.album">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="">
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-6">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">{{ track.artists[0].name}}</p>
        </div>
      </div>

       <div class="content">
         <small>{{ track.duration_ms | ms-to-mn }}</small>
         <nav class="level">
           <div class="level-left">
             <button class="level-item button is-primary">
               <span class="icon is-small" @click="selectTrack"> ▶ </span>
             </button>
             <button class="level-item button is-warning">
               <span class="icon is-small" @click="goToTrack(track.id)"> ❔ </span>
             </button>
           </div>
         </nav>
       </div>
    </div>
  </div>
</template>

<script>
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [ trackMixin ],
    props: {
      track: { type: Object, required: true }
    },
    methods: {
      goToTrack (id) {
        if (!this.track.preview_url) { return }
        this.$router.push({ name: 'track', params: {id} })
      }
    }
  }
</script>