<template>
  <v-container fluid class="pa-0">
    <!-- Seção de Boas-Vindas/Banner - Layout em Colunas -->
    <v-row no-gutters class="align-center">
      <!-- Coluna da Imagem -->
      <v-col cols="12" md="6">
        <v-img
          src="/assets/banner.png"
          class="full-width-image"
          cover
        />
      </v-col>
      <!-- Coluna do Texto -->
      <v-col cols="12" md="6" class="pa-8">
        <h1 class="display-2 font-weight-bold mb-4 primary--text">
          Bem-vindo à MedVida!
        </h1>

        <p class="subheading font-weight-regular mb-8">
          Seu bem-estar é nossa prioridade. Encontre aqui as melhores soluções em planos de saúde para você e sua família ou empresa.
        </p>
        <!-- Você pode adicionar um botão ou mais conteúdo aqui -->
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <!-- Seção Cliente MedVida Tem -->
    <v-row justify="center" class="my-8">
      <v-col cols="12" class="text-center">
        <h2 class="headline font-weight-bold mb-8 primary--text">Cliente MedVida Tem</h2>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="6" class="pa-4 text-center d-flex flex-column align-center">
          <img src="https://img.icons8.com/badges/48/ambulance.png" alt="Ambulancia" width="48" height="48" class="mb-4"/>
          <v-card-title class="justify-center subheading font-weight-bold">Urgência/Emergência 24h</v-card-title>
          
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="6" class="pa-4 text-center d-flex flex-column align-center">
          <img src="https://img.icons8.com/wired/64/hospital.png" alt="Hospital" width="48" height="48" class="mb-4"/>
          <v-card-title class="justify-center subheading font-weight-bold">Pronto atendimento 24hs.</v-card-title>
          
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="6" class="pa-4 text-center d-flex flex-column align-center">
          <img src="https://img.icons8.com/badges/48/hypertension.png" alt="Consultas Médicas" width="48" height="48" class="mb-4"/>
          <v-card-title class="justify-center subheading font-weight-bold">Consultas médicas 24hs</v-card-title>
          
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card elevation="6" class="pa-4 text-center d-flex flex-column align-center">
          <img src="https://img.icons8.com/badges/48/hand-with-a-pill.png" alt="Traumatologia" width="48" height="48" class="mb-4"/>
          <v-card-title class="justify-center subheading font-weight-bold">Traumatologia 24hs</v-card-title>
          
        </v-card>
      </v-col>

      <!-- Adicionar mais cards conforme necessário -->

    </v-row>

    <v-divider class="my-6"></v-divider>

    <!-- Seção Formulário de Contato Rápido -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Quer saber mais sobre o nosso plano médico MedVida?</h2>
        <p class="mb-6">Deixe seu telefone, sem compromisso, e nossa equipe comercial entrará em contato.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-form>
          <v-text-field label="Região João Pessoa ou Campina Grande" outlined dense></v-text-field>
          <v-text-field label="Nome *" outlined dense required></v-text-field>
          <v-text-field label="Telefone *" outlined dense required></v-text-field>
          <v-checkbox label="Assinale se seu telefone for Whatsapp"></v-checkbox>
          <v-checkbox label="Marque se quer saber mais para planos empresariais"></v-checkbox>
          <p class="caption text-center mt-4">*A MedVida não se encontra regulada pela lei federal 9.656 de 03/06/1998</p>
          <p class="caption text-center">Não sendo plano de saúde, seguro de saúde e nem cartão desconto.</p>
          <div class="text-center mt-6">
            <v-btn color="primary" large>Enviar</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>

    <!-- Seção Depoimentos -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 primary--text mb-6">Depoimentos de Clientes MedVida</h2>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" md="5">
            <v-card shaped elevation="6" class="pa-4">
              <v-card-text>
                <div class="text-center mb-4">
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                </div>
                <p class="text-center">A MedVida tem ótimos médicos e clinicas, você escolhe onde quer ser atendido, muito bom!</p>
                <p class="font-weight-bold text-right mt-4">- Edmo Souza</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
             <v-card shaped elevation="6" class="pa-4">
              <v-card-text>
                 <div class="text-center mb-4">
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                </div>
                <p class="text-center">Sou cliente MedVida há mais de 5 anos e aqui é um plano excelente, temos direito a consultas e aos melhores médicos, somos muito bem assistidos. Além disso, também temos direito a consultórios ótimos, ambulância 24 horas e muito mais. Não me arrependo!</p>
                <p class="font-weight-bold text-right mt-4">- Marluce</p>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Adicionar mais depoimentos conforme necessário -->
        </v-row>
      </v-col>
    </v-row>

     <!-- Seção Ampla rede credenciada -->
     <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Ampla rede credenciada MedVida</h2>
        <p class="mb-6">Confira nossa vasta rede de médicos e clínicas credenciadas:</p>
         <v-img src="/assets/Plano De Saúde Empresarial Post Feed Para Instagram Azul Branco Laranja.png" alt="Mapa Rede Credenciada MedVida" contain max-height="400"></v-img>
      </v-col>
    </v-row>

    <!-- Seção Nossos Diferenciais -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 primary--text mb-6">Nossos Diferenciais MedVida</h2>
      </v-col>
       <v-col cols="12" md="5">
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-icon><v-icon color="primary">mdi-office-building</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Sede física MedVida em João Pessoa e Campina Grande</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon color="primary">mdi-history</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Primeiro Plano Médico da Paraíba, com mais de 15 anos de experiência</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon color="primary">mdi-doctor</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Ampla rede credenciada com mais de 1100 médicos</v-list-item-title></v-list-item-content>
          </v-list-item>
        </v-list>
       </v-col>
        <v-col cols="12" md="5">
         <v-list class="transparent">
          <v-list-item>
             <v-list-item-icon><v-icon color="primary">mdi-clock-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Consultas eletivas noturnas</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item>
             <v-list-item-icon><v-icon color="primary">mdi-ambulance</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Urgência e emergência 24 horas</v-list-item-title></v-list-item-content>
          </v-list-item>
         </v-list>
       </v-col>
    </v-row>

    <!-- Seção Perguntas Frequentes -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="10">
        <h2 class="text-center text-h5 primary--text mb-6">Perguntas Frequentes sobre a MedVida</h2>
        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              O que é a MedVida? É um plano de saúde?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              O plano dá direito a o que?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              Quais são as formas de pagamento?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              Quem não tem cartão de crédito, pode adquirir o plano?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              Como eu faço para marcar consulta?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              Posso incluir o pagamento no meu contra-cheque?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
            <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              A ambulância funciona 24 horas?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header class="font-weight-bold">
              <v-icon color="primary" class="mr-3">mdi-help-circle-outline</v-icon>
              É possível cancelar?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <!-- Seção Contato/Localização -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="5">
         <h2 class="text-h5 primary--text mb-4">Contato MedVida</h2>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Desembargador José Peregrino, 230. Centro. João Pessoa – PB, Brasil.</p>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Vidal de Negreiros, 51, Loja A, Centro, Campina Grande - PB, Brasil.</p>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-email</v-icon>previmedpb@hotmail.com</p>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-phone</v-icon>83 3566-9794</p>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficial</p>
        <p class="mb-2"><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficialcg</p>
      </v-col>
       <v-col cols="12" md="5">
         <h2 class="text-h5 primary--text mb-4">Envie uma Mensagem para a MedVida</h2>
         <v-form>
          <v-text-field label="Nome" outlined dense></v-text-field>
          <v-text-field label="Telefone" outlined dense></v-text-field>
          <v-textarea label="Mensagem" outlined dense></v-textarea>
          <div class="text-right">
             <v-btn color="primary">Enviar</v-btn>
          </div>
        </v-form>
       </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'HomeSite'
}
</script>

<style scoped>
.full-height-background {
  background-size: cover;
  background-position: center center;
  height: 100vh; /* Define a altura igual à altura da viewport */
  display: flex; /* Usa flexbox para centralizar o conteúdo verticalmente */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente preto */
  padding: 20px;
  border-radius: 8px;
}

.full-width-image {
  width: 100%;
  height: 100%;
}
</style>
