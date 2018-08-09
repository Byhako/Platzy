<template>
  <main>

    <pm-notification v-show="showNotificationError" theme="error">
      <p slot="body">
        No se encontraron resultados. ☹
      </p>
    </pm-notification>

    <section class="section" >
      <nav class="navbar">
        <div class="line">
          <input type="text" placeholder="Buscar"
            class="input is-large" v-model='busqueda'
            v-on:keyup.delete="clear"
            v-on:keyup.enter="search"> <!--modifiers -->
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-danger is-large" @click="clear">&times;</a>
        </div>
      </nav>
      
      <pm-notification v-show="notificationSuccess" theme="success">
        <p slot="body">{{ searchM }}</p>
      </pm-notification>

      <pm-loader v-show="isLoading"/>
      
      <div class="container" v-show="!isLoading">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="t in pistas" v-bind:key='t.id'>
          <pm-track 
            :track="t"
            @select="setSelectedTrack"
            :class="{'is-active': t.id === selectedTrack}"
          ></pm-track>
        </div>
      </div>
      </div>
    </section>


  </main>
</template>


<script>
import trackServices from '@/services/track'
import PmTrack from '@/components/Track'
import PmLoader from '@/components/shared/Loader'
import PmNotification from '@/components/shared/Notification'

export default {
  name: 'app',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      busqueda: '',
      pistas: [],
      isLoading: false,
      selectedTrack: '',
      showNotificationError: false,
      notificationSuccess: false
    }
  },
  methods: {
    search () {
      if (!this.busqueda) { return }
      this.isLoading = true
      trackServices.search(this.busqueda)
        .then(res => {
          this.showNotificationError = res.tracks.total === 0
          this.notificationSuccess = res.tracks.total !== 0
          this.pistas = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    },

    clear () {
      this.notificationSuccess = false
      this.pistas = []
      this.$bus.$emit('set-track', false)
    }
  },
  computed: {
    searchM () {
      return `Encontrados: ${this.pistas.length}`
    }
  },
  watch: {
    showNotificationError () {
      if (this.showNotificationError) {
        setTimeout(() => {
          this.showNotificationError = false
        }, 3000)
      }
    },
  }
}
</script>


<style lang="scss">
.line {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
  max-width: 1162px;
  position: relative;
  margin: 0 auto;
}
.encontrados {
  margin-bottom: 20px;
}
.is-active {
  border: 3px solid #23d160;
}
</style>
