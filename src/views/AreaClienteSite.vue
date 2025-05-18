<template>
  <v-container fluid fill-height class="background">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card elevation="10" class="pa-8">
          <v-card-title class="text-h5 primary--text text-center justify-center mb-6">Área do Cliente</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-mail ou Usuário"
                name="login"
                prepend-inner-icon="mdi-account"
                type="text"
                outlined
                dense
                required
                color="primary"
              ></v-text-field>

              <v-text-field
                label="Senha"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                outlined
                dense
                required
                color="primary"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="flex-column">
            <v-btn color="primary" large block class="mb-4">
              Login
            </v-btn>
            <v-btn color="secondary" large block>
              Cadastre-se
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AreaClienteSite',
}
</script>

<style scoped>
.background {
  background-color: var(--v-background-base);
}
</style>
