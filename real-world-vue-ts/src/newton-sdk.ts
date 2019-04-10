import {
  AuthService,
  INewtonHTTPClient,
  NewtonObjects,
  NewtonService } from '@pfizer/newton-js-sdk';

export enum NewtonEndpoint {
  Asset = 'asset',
  Event = 'event',
  EventType = 'eventType',
  Instance = 'instance',
  Metrics = 'metrics',
  NewtonProfile = 'newtonprofile',
  Person = 'person',
  Recall = 'recall',
  Upload = 'upload',
  Weather = 'weather',
}
const NewtonSDK = {
  install(Vue, options) {
  // console.log('Init Newton Plugin');
    // const httpClient = new NewtonAxiosHttpClient();
    // const newtonConfig = {
    //   baseUrl: 'https://newton-api-stage.cloudhub.io/api/v1',
    //   instanceId: '732bceb3-e33f-4b00-96dc-6539f23e7e43',
    //   basicAuth: { username: 'CLIB_AdmPx', password: 'KenUka*8exeW' }
    // };
    // const janrainConfig = {
    //   flowName: 'standard',
    //   registerForm: null,
    //   signInForm: null,
    //   changePasswordForm: null,
    //   emailFieldName: 'signInEmailAddress',
    //   passwordFieldName: 'currentPassword',
    //   clientId: 'bdv6jxhmkea9vvk963jpmajwmv79ms7j',
    //   headers: {
    //     'X-INSTANCE-ID': '732bceb3-e33f-4b00-96dc-6539f23e7e43'
    //   },
    //   version: '91a45814-ed8e-4b25-93f5-2b90de8bc40b',
    //   locale: null,
    //   janrainEnv: 'dev',
    //   responseType: 'token'
    // };
  NewtonSDK.newtonObjects = new NewtonObjects(
      options.newtonConfig,
      options.janrainConfig,
    );

  const context = typeof window !== 'undefined' ? window : {};

  NewtonSDK.newtonObjects.bindTo(context);

  Vue.getNewtonConfig = () => {
      return options.newtonConfig;
    };
  Vue.getJanrainConfig = () =>  {
      return options.janrainConfig;
    };

  Vue.newtonService  = (): NewtonService =>  {
      return NewtonSDK.newtonObjects.newtonService;
    };

  Vue.authService = (): AuthService => {
      return NewtonSDK.newtonObjects.newtonService.service('auth') as AuthService;
    };

  Vue.newtonEndpoint = (endpoint: NewtonEndpoint) => {
      return NewtonSDK.newtonObjects.newtonService.service(endpoint);
    };

    // Automatic installation if Vue has been added to the global scope.
  if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(NewtonSDK);
    }
  },
};

export default NewtonSDK;
