import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import routes from './router/index';
import VueRouter from 'vue-router';

const router =   new VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
Vue.use(router);
Vue.config.productionTip = false
global.$route = this.$route;
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
