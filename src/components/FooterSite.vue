<template>
  <v-footer color="primary" dark padless>
    <v-col
      class="text-center"
      cols="12"
    >
      &copy; {{ currentYear }} - MedVida
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterSite',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
/* Adicionar estilos específicos para FooterSite aqui, se necessário */
</style>
