<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="6" class="pa-6">
          <v-card-title class="text-h5 primary--text text-center justify-center mb-6">Fale Conosco</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Nome"
                outlined
                dense
                required
                color="primary"
              ></v-text-field>

              <v-text-field
                label="E-mail"
                outlined
                dense
                required
                color="primary"
              ></v-text-field>

              <v-text-field
                label="Assunto"
                outlined
                dense
                color="primary"
              ></v-text-field>

              <v-textarea
                label="Mensagem"
                outlined
                dense
                required
                color="primary"
              ></v-textarea>

              <div class="text-center mt-4">
                <v-btn color="primary" large>Enviar Mensagem</v-btn>
              </div>
            </v-form>

            <v-divider class="my-8"></v-divider>

            <div class="text-h6 primary--text mb-4">Informações de Contato</div>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Desembargador José Peregrino, 230. Centro. João Pessoa – PB, Brasil.</p>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Vidal de Negreiros, 51, Loja A, Centro, Campina Grande - PB, Brasil.</p>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-email</v-icon>previmedpb@hotmail.com</p>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-phone</v-icon>83 3566-9794</p>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficial</p>
            <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficialcg</p>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContatoSite'
}
</script>

<style scoped>
/* Estilos específicos para ContatoSite aqui, se necessário */
</style>
