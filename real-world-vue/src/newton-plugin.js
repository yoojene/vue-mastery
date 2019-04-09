const NewtonPlugin = {
  install(Vue) {
    console.log('this is in the newton plugissn');

    Vue.getNewtonConfig = function() {
      return {
        url: 'https://newton-api-dev.cloudhub.io/api/v1',
        instanceId: '010101010',
        basicAuth: { username: 'USERNAME', password: 'PASSwood' }
      };
    };

    // Automatic installation if Vue has been added to the global scope.
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(NewtonPlugin);
    }
  }
};

export default NewtonPlugin;
