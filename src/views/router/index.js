import Vue from 'vue'
import Router from 'vue-router'

import HomeSite from '@/views/HomeSite.vue'
import RedeCredenciadaSite from '@/views/RedeCredenciadaSite.vue'
import ContatoSite from '@/views/ContatoSite.vue'
import AreaClienteSite from '@/views/AreaClienteSite.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // para URLs "limpas", sem #
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSite
    },
    {
      path: '/rede-credenciada',
      name: 'redeCredenciada',
      component: RedeCredenciadaSite
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoSite
    },
    {
      path: '/area-cliente',
      name: 'areaCliente',
      component: AreaClienteSite
    }
  ]
})
