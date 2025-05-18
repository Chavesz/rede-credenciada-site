import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#383b44', // Cor primária (azul acinzentado escuro)
          secondary: '#7d7375', // Cor secundária (acinzentado/amarronzado)
          background: '#FFFFFF', // Fundo branco
          // Você pode adicionar outras cores aqui se precisar, como um 'dark' ou 'surface'
          // dark: '#1e1e22',
        },
      },
    },
  }),
  render: h => h(App),
}).$mount('#app')
