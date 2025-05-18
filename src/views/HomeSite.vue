<template>
  <v-container fluid>
    <!-- Seção Principal / Banner -->
    <v-row align="center" justify="center" class="py-12">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h4 text-sm-h3 text-md-h2 primary--text">Empresário, conheça o plano MedVida empresarial.</h1>
        <h2 class="text-h6 text-sm-h5 font-weight-light mt-4">A assistência médica ideal para você e seus colaboradores.</h2>
        <v-btn color="primary" large class="mt-6" href="#">QUERO SABER MAIS</v-btn>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <!-- Imagem do banner -->
        <v-img src="/assets/bann.png" alt="Imagem de destaque MedVida" contain max-height="400"></v-img>
      </v-col>
    </v-row>

    <!-- Seção Quem Somos -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="text-center text-h5 primary--text mb-4">Quem Somos - MedVida</h2>
        <p class="text-justify">Há mais de 15 anos, a MedVida se destaca como líder em comercialização de planos de PREVENÇÃO E ASSISTÊNCIA MÉDICA PRÉ-HOSPITALAR na Grande João Pessoa, Campina Grande e outras cidades da Paraíba. Acreditamos que a saúde é um direito de todos, por isso oferecemos preços justos e acessíveis, sem abrir mão da qualidade e da variedade de serviços. Mais que um plano médico, a MedVida é um compromisso com a sua prevenção, saúde e bem-estar. Nossa ampla rede de médicos e serviços garante o acesso a um atendimento de qualidade para você e sua família.</p>
      </v-col>
    </v-row>

    <!-- Seção Cliente MedVida Tem -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="text-center text-h5 primary--text mb-4">Cliente MedVida Tem</h2>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Urgência e Emergência 24h (Atendimento em domicílio através de ambulância, motolância ou UTI móvel!)</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
             <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Pronto atendimento 24hs.</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
              <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Consultas médicas 24hs com Clínico/Otorrino/Pediatra</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
             <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Traumatologia 24hs (Consulta/RaioX/imobilização)</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
              <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Telemedicina</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
             <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Preço único para todas idades</v-list-item-title></v-list-item-content>
          </v-list-item>
           <v-list-item>
              <v-list-item-icon><v-icon color="primary">mdi-check-circle-outline</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>Ampla rede credenciada na Paraíba</v-list-item-title></v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- Seção Formulário de Contato Rápido -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Quer saber mais sobre o nosso plano médico MedVida?</h2>
        <p>Deixe seu telefone, sem compromisso, e nossa equipe comercial entrará em contato.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-form>
          <v-text-field label="Região João Pessoa ou Campina Grande" outlined dense></v-text-field>
          <v-text-field label="Nome *" outlined dense required></v-text-field>
          <v-text-field label="Telefone *" outlined dense required></v-text-field>
          <v-checkbox label="Assinale se seu telefone for Whatsapp"></v-checkbox>
          <v-checkbox label="Marque se quer saber mais para planos empresariais"></v-checkbox>
          <p class="caption text-center">*A MedVida não se encontra regulada pela lei federal 9.656 de 03/06/1998</p>
          <p class="caption text-center">Não sendo plano de saúde, seguro de saúde e nem cartão desconto.</p>
          <div class="text-center">
            <v-btn color="primary" large>Enviar</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>

    <!-- Seção Depoimentos -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Depoimentos de Clientes MedVida</h2>
        <v-row justify="center" class="mt-4">
          <v-col cols="12" md="5">
            <v-card shaped elevation="4">
              <v-card-text>
                <div class="text-center mb-4">
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                </div>
                <p class="text-center">A MedVida tem ótimos médicos e clinicas, você escolhe onde quer ser atendido, muito bom!</p>
                <p class="font-weight-bold text-right">- Edmo Souza</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
             <v-card shaped elevation="4">
              <v-card-text>
                 <div class="text-center mb-4">
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                   <v-icon color="amber">mdi-star</v-icon>
                </div>
                <p class="text-center">Sou cliente MedVida há mais de 5 anos e aqui é um plano excelente, temos direito a consultas e aos melhores médicos, somos muito bem assistidos. Além disso, também temos direito a consultórios ótimos, ambulância 24 horas e muito mais. Não me arrependo!</p>
                <p class="font-weight-bold text-right">- Marluce</p>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Adicionar mais depoimentos conforme necessário -->
        </v-row>
      </v-col>
    </v-row>

     <!-- Seção Ampla rede credenciada (descrição da imagem) -->
     <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Ampla rede credenciada MedVida</h2>
        <p>Descrição da imagem (substituir por imagem real)</p>
        <!-- Você pode adicionar a imagem da rede credenciada aqui se tiver o arquivo -->
         <v-img src="/assets/Plano De Saúde Empresarial Post Feed Para Instagram Azul Branco Laranja.png" alt="Mapa Rede Credenciada MedVida" contain max-height="300"></v-img>
      </v-col>
    </v-row>

    <!-- Seção Nossos Diferenciais -->
    <v-row justify="center" class="mt-10 py-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h5 primary--text mb-4">Nossos Diferenciais MedVida</h2>
      </v-col>
       <v-col cols="12" md="5">
        <v-list class="transparent">
          <v-list-item><v-list-item-icon><v-icon color="primary">mdi-check-circle</v-icon></v-list-item-icon><v-list-item-content><v-list-item-title>Sede física MedVida em João Pessoa e Campina Grande</v-list-item-title></v-list-item-content></v-list-item>
          <v-list-item><v-list-item-icon><v-icon color="primary">mdi-check-circle</v-icon></v-list-item-icon><v-list-item-content><v-list-item-title>Primeiro Plano Médico da Paraíba, com mais de 15 anos de experiência</v-list-item-title></v-list-item-content></v-list-item>
          <v-list-item><v-list-item-icon><v-icon color="primary">mdi-check-circle</v-icon></v-list-item-icon><v-list-item-content><v-list-item-title>Ampla rede credenciada com mais de 1100 médicos</v-list-item-title></v-list-item-content></v-list-item>
        </v-list>
       </v-col>
        <v-col cols="12" md="5">
         <v-list class="transparent">
          <v-list-item><v-list-item-icon><v-icon color="primary">mdi-check-circle</v-icon></v-list-item-icon><v-list-item-content><v-list-item-title>Consultas eletivas noturnas</v-list-item-title></v-list-item-content></v-list-item>
          <v-list-item><v-list-item-icon><v-icon color="primary">mdi-check-circle</v-icon></v-list-item-icon><v-list-item-content><v-list-item-title>Urgência e emergência 24 horas</v-list-item-title></v-list-item-content></v-list-item>
         </v-list>
       </v-col>
    </v-row>

    <!-- Seção Perguntas Frequentes -->
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="text-center text-h5 primary--text mb-4">Perguntas Frequentes sobre a MedVida</h2>
        <v-expansion-panels popout>
          <v-expansion-panel>
            <v-expansion-panel-header>O que é a MedVida? É um plano de saúde?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>O plano dá direito a o que?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>Quais são as formas de pagamento?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>Quem não tem cartão de crédito, pode adquirir o plano?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>Como eu faço para marcar consulta?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>Posso incluir o pagamento no meu contra-cheque?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
            <v-expansion-panel>
            <v-expansion-panel-header>A ambulância funciona 24 horas?</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Conteúdo da resposta aqui.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
           <v-expansion-panel>
            <v-expansion-panel-header>É possível cancelar?</v-expansion-panel-header>
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
        <p><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Desembargador José Peregrino, 230. Centro. João Pessoa – PB, Brasil.</p>
        <p><v-icon small class="mr-2" color="primary">mdi-map-marker</v-icon>Rua Vidal de Negreiros, 51, Loja A, Centro, Campina Grande - PB, Brasil.</p>
        <p><v-icon small class="mr-2" color="primary">mdi-email</v-icon>previmedpb@hotmail.com</p>
        <p><v-icon small class="mr-2" color="primary">mdi-phone</v-icon>83 3566-9794</p>
        <p><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficial</p>
        <p><v-icon small class="mr-2" color="primary">mdi-instagram</v-icon>@medvidaoficialcg</p>
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
/* Adicionar estilos específicos para HomeSite aqui, se necessário */
</style>
