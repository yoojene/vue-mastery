import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import NewtonPlugin from './newton-plugin.js';

Vue.config.productionTip = false;

Vue.use(NewtonPlugin, {});

new Vue({
  router,
  store,
  NewtonPlugin,
  render: h => h(App),
  created: function() {
    // console.log(NewtonPlugin);
  }
}).$mount('#app');

console.log(Vue.getNewtonConfig());
