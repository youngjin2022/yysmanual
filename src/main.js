import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { router } from './router/index.js'
import VueDaumPostcode from "vue-daum-postcode"
import VueMeta from 'vue-meta'

// Vue.prototype.$axios = axios
Vue.prototype.$axios = axios.create({
    baseURL: 'https://api.harrygnd.co.kr',
    timeout: 0,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': 'https://api.harrygnd.co.kr',
        'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
    },
    proxy: {
        protocol: 'https',
        host: 'api.harrygnd.co.kr',
        port: 443,
        changeOrigin: true,
    },
})
Vue.config.productionTip = false

Vue.use(VueMeta);

new Vue({
  vuetify,
  router,
  VueDaumPostcode,
  render: h => h(App)
}).$mount('#app')
