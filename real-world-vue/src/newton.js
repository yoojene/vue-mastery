import Vue from 'vue';
import NewtonPlugin from './index.js';

Vue.use(NewtonPlugin);

export default new NewtonPlugin({
  url: 'https://newton-api-dev.cloudhub.io/api/v1',
  instanceId: '01869311477',
  basicAuth: { username: 'Eugene', password: 'isNew' }
});

console.log(Vue.NewtonPlugin);
