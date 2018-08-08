<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          
          <div class="navbar-start">
            <div class="navbar-item is-shadow">
              <strong>♉ PLATZI MUSIC</strong>
            </div>
          </div>

          <div class="navbar-end navbar-menu">
            <router-link to="/" class="navbar-item">Buscar</router-link>
            <router-link to="about" class="navbar-item">Nosotros</router-link>
          </div>

        </div>
      </header>
    </div>
  
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones que estan Vue-nisimas!</h2>
        <pm-player></pm-player>
      </div>
    </div>

  </section>
</template>

<script>
import PmPlayer from '@/components/Player'

export default {
  components: {PmPlayer}
}
</script>
