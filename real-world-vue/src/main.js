import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import NewtonSDK from './newton-sdk.js';

Vue.config.productionTip = false;

Vue.use(NewtonSDK, {
  newtonConfig: {
    baseUrl: 'https://newton-api-stage.cloudhub.io/api/v1',
    instanceId: '732bceb3-e33f-4b00-96dc-6539f23e7e43',
    basicAuth: { username: 'CLIB_AdmPx', password: 'KenUka*8exeW' }
  },
  janrainConfig: {
    flowName: 'standard',
    registerForm: null,
    signInForm: null,
    changePasswordForm: null,
    emailFieldName: 'signInEmailAddress',
    passwordFieldName: 'currentPassword',
    clientId: 'bdv6jxhmkea9vvk963jpmajwmv79ms7j',
    headers: {
      'X-INSTANCE-ID': '732bceb3-e33f-4b00-96dc-6539f23e7e43'
    },
    version: '91a45814-ed8e-4b25-93f5-2b90de8bc40b',
    locale: null,
    janrainEnv: 'dev',
    responseType: 'token'
  }
});

new Vue({
  router,
  store,
  NewtonSDK,
  render: h => h(App),
  created: function() {
    // console.log(NewtonPlugin);
  }
}).$mount('#app');

// console.log(Vue.newtonService());

// console.log(Vue.authService());

// const authService = Vue.authService();

// authService
//   .loginViaEmail('test33@alextheward.com', 'password1')
//   .then(res => console.log(res));
