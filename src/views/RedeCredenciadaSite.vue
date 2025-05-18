<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-4">
          <v-card-title class="text-h5 primary--text justify-center">
            <v-icon color="primary" class="mr-2">mdi-crosshairs-gps</v-icon> Rede Credenciada
          </v-card-title>
          <v-card-text>
            <v-form>
              <p class="text-subtitle-1 text-center">Pesquisa Rede Credenciada</p>

              <v-select
                label="Localidade"
                :items="localidades"
                outlined
                dense
                v-model="selectedLocalidade"
                prepend-inner-icon="mdi-map-marker"
              ></v-select>

              <v-select
                label="Especialidade"
                :items="especialidades"
                item-text="descricao"
                item-value="id"
                outlined
                dense
                v-model="selectedEspecialidadeId"
                prepend-inner-icon="mdi-stethoscope"
              ></v-select>

              <div class="text-center">
                <v-btn color="primary" large @click="search">Pesquisar</v-btn>
              </div>
            </v-form>

            <v-card v-if="results.length > 0" elevation="2" class="mt-6 pa-4">
              <v-card-title class="text-h6 primary--text">Resultados da Pesquisa</v-card-title>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Nome</th>
                      <th class="text-left">Especialidade</th>
                      <th class="text-left">Endereço</th>
                      <th class="text-left">Contato</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in results" :key="index">
                      <td>{{ item.nome }}</td>
                      <td>{{ item.especialidade }}</td>
                      <td>{{ item.endereco }}</td>
                      <td>{{ item.contato }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RedeCredenciadaSite',
  data() {
    return {
      selectedLocalidade: null,
      selectedEspecialidadeId: null,
      localidades: ['João Pessoa', 'Campina Grande', 'Demais cidades'],
      especialidades: [
        { id: 95, descricao: 'ALERGOLOGISTA' },
        { id: 141, descricao: 'ANGIOLOGISTA' },
        { id: 156, descricao: 'AVALIAÇÃO PSICOLOGICA/CONCURSO' },
        { id: 160, descricao: 'CABEÇA E PESCOÇO' },
        { id: 176, descricao: 'CARDIO PEDIATRA' },
        { id: 74, descricao: 'CARDIOLOGISTA' },
        { id: 155, descricao: 'CIRURGIAO' },
        { id: 183, descricao: 'CIRURGIAO CARDIOVASCULAR' },
        { id: 158, descricao: 'CL. GERAL + COMBO MES MULHER' },
        { id: 60, descricao: 'CLINICO GERAL' },
        { id: 73, descricao: 'DERMATOLOGISTA' },
        { id: 163, descricao: 'ENDOCRINO-PEDIATRA' },
        { id: 75, descricao: 'ENDOCRINOLOGISTA' },
        { id: 187, descricao: 'EXAMES CARDIOLÓGICOS' },
        { id: 185, descricao: 'EXAMES DE IMAGENS' },
        { id: 186, descricao: 'EXAMES LABORATORIAS' },
        { id: 153, descricao: 'FISIO PSICOMOTRICISTA' },
        { id: 138, descricao: 'FISIOTERAPEUTA' },
        { id: 167, descricao: 'FISIOTERAPEUTA PEDIATRICA' },
        { id: 168, descricao: 'FISIOTERAPEUTA RESPIRATORIA' },
        { id: 152, descricao: 'FISIOTERAPIA PELVICA' },
        { id: 150, descricao: 'FONOAUDIOLOGISTA' },
        { id: 191, descricao: 'GASTRO-CIRURGIÃO' },
        { id: 175, descricao: 'GASTRO-PEDIATRA' },
        { id: 63, descricao: 'GASTROENTEROLOGISTA' },
        { id: 62, descricao: 'GERIATRA' },
        { id: 64, descricao: 'GINECOLOGISTA' },
        { id: 173, descricao: 'HEMATOLOGIA' },
        { id: 174, descricao: 'HEMATOLOGISTA INFANTIL' },
        { id: 145, descricao: 'HEPATOLOGIA' },
        { id: 161, descricao: 'INFECTOLOGISTA' },
        { id: 143, descricao: 'MASTOLOGISTA' },
        { id: 181, descricao: 'MEDICINA CLINICA/MEDICO DA FAMILIA' },
        { id: 157, descricao: 'MEDICINA DO TRABALHO' },
        { id: 146, descricao: 'NEFROLOGISTA' },
        { id: 188, descricao: 'NEFROLOGISTA PEDIATRA' },
        { id: 147, descricao: 'NEURO-PEDIATRA' },
        { id: 149, descricao: 'NEUROCIRURGIÃO' },
        { id: 140, descricao: 'NEUROLOGISTA' },
        { id: 165, descricao: 'NEUROPEDIATRA' },
        { id: 172, descricao: 'NEUROPSICOLOGO' },
        { id: 166, descricao: 'NEUROPSICOPEDAGOGA' },
        { id: 177, descricao: 'NEUROPSIQUIATRA' },
        { id: 65, descricao: 'NUTRICIONISTA' },
        { id: 154, descricao: 'NUTRICIONISTA ESPORTIVA' },
        { id: 171, descricao: 'NUTRICIONISTA PEDIATRA' },
        { id: 159, descricao: 'NUTROLÓGA' },
        { id: 148, descricao: 'OBSTETRA' },
        { id: 184, descricao: 'ODONTOLOGIA' },
        { id: 142, descricao: 'OFTALMOLOGISTA' },
        { id: 189, descricao: 'OFTALMOPEDIATRA' },
        { id: 66, descricao: 'ONCOLOGISTA' },
        { id: 182, descricao: 'ONCOLOGISTA PEDIATRA' },
        { id: 67, descricao: 'ORTOPEDISTA' },
        { id: 68, descricao: 'OTORRINOLARINGOLOGISTA' },
        { id: 70, descricao: 'PEDIATRA' },
        { id: 144, descricao: 'PNEUMOLOGISTA' },
        { id: 71, descricao: 'PROCTOLOGISTA' },
        { id: 190, descricao: 'PSICOLOGA' },
        { id: 162, descricao: 'PSICOLOGA INFANTIL' },
        { id: 72, descricao: 'PSICOLOGO' },
        { id: 180, descricao: 'PSICOLOGO - ABA' },
        { id: 151, descricao: 'PSICOPEDAGOGA' },
        { id: 61, descricao: 'PSIQUIATRA' },
        { id: 164, descricao: 'PSIQUIATRA INFANTIL' },
        { id: 139, descricao: 'REUMATOLOGISTA' },
        { id: 169, descricao: 'RPG - FISIOTERAPIA' },
        { id: 170, descricao: 'TERAPEUTA OCUPACIONAL' },
        { id: 69, descricao: 'UROLOGISTA' }
      ],
      results: [], // Propriedade para armazenar os resultados da pesquisa
      // Dados de exemplo para Angiologista
      angiologistaData: [
        {
          nome: 'PREVMED',
          especialidade: 'ANGIOLOGISTA',
          endereco: 'R. Desportista Aurélio Rocha, 338 - Torre, João Pessoa - PB, 58040-110',
          contato: '(83) 98600-3345'
        }
      ]
    };
  },
  methods: {
    search() {
      // Lógica de busca (simplificada para o exemplo)
      // Aqui você faria uma chamada API real com base em selectedLocalidade e selectedEspecialidadeId
      // Para este exemplo, vamos apenas filtrar os dados de angiologistaData se a especialidade selecionada for Angiologista
      const selectedEspecialidade = this.especialidades.find(esp => esp.id === this.selectedEspecialidadeId);

      if (selectedEspecialidade && selectedEspecialidade.descricao === 'ANGIOLOGISTA') {
        this.results = this.angiologistaData;
      } else {
        this.results = []; // Limpa os resultados se outra especialidade for selecionada (ou se não houver dados)
      }

      // Em uma aplicação real, você carregaria os dados reais com base na localidade e especialidade
      console.log('Pesquisando para Localidade:', this.selectedLocalidade, 'e Especialidade ID:', this.selectedEspecialidadeId);
    }
  }
}
</script>

<style scoped>
/* Adicionar estilos específicos para RedeCredenciadaSite aqui, se necessário */
</style>
