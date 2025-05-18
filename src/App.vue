<template>
  <v-app>
    <NavbarSite />
    <v-main>
      <router-view />
    </v-main>
    <FooterSite />
  </v-app>
</template>

<script>
import NavbarSite from './components/NavbarSite.vue'
import FooterSite from './components/FooterSite.vue'

export default {
  components: {
    NavbarSite,
    FooterSite
  }
}
</script>

