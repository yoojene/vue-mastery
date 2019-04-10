<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <div>
    <button @click="doLogin($event)" style="font-size: 50px">Login</button>
  </div>
   <br />
    <br />
    <div >
      Email Address : <b style="color: red">{{ email }}</b>
    </div>
    <div>
      Janrain ID : <b style="color: red">{{ janrainId }}</b>
    </div>
  
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface IHome {
    email: string;
    janrainId: string;
}
@Component({
  components: {
    HelloWorld,
  },
  methods: {
    doLogin() {
      console.log('calling login');
      const VueApp: any = Vue;

      const authService = VueApp.authService();

      authService
        .loginViaEmail('test33@alextheward.com', 'password1')
        .then((res): any => {
          console.log(res);
          this.email = res.email;
          this.janrainId = res.janrainId;
        });
    }
  },
})
export default class Home extends Vue implements IHome {


  
}
</script>
