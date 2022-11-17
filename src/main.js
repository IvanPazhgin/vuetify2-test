import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/ExcursionList/ExcursionList.scss'
import './assets/ExcursionList/__ExcursionItem/excursion-list__excursion-item.scss'
import './assets/ExcursionList/_flex-wrap/excursion-list_flex-wrap_nowrap.scss'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
