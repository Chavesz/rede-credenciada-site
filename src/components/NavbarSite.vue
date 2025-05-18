<template>
  <v-app-bar app color="white" light elevation="2">
    <div class="d-flex align-center">
      <v-img
        alt="Logo MedVida"
        class="shrink mr-2"
        contain
        src="/assets/logo.png"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      text
      :to="{ path: '/' }"
      router
      active-class="primary--text"
    >
      Home
    </v-btn>
    <v-btn to="/rede-credenciada" text active-class="primary--text">Rede Credenciada</v-btn>
    <v-btn to="/contato" text active-class="primary--text">Contato</v-btn>
    <v-btn to="/area-cliente" text active-class="primary--text">Área do Cliente</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarSite'
}
</script>

<style scoped>
/* Adicionar estilos específicos para NavbarSite aqui, se necessário */
</style>
