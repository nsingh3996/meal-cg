import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Embed from 'v-video-embed'

Vue.use(Embed);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
