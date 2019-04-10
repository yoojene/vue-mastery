<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <about-comp></about-comp> -->

    <button @click="doLogin($event)">Log In</button>

    <br />
    <br />
    <div>
      Email Address : <b>{{ email }}</b>
    </div>
    <div>
      Janrain ID : <b>{{ janrainId }}</b>
    </div>
  </div>
</template>

<script>
// import AboutComp from '@/components/AboutComp.vue';
import Vue from 'vue';

export default {
  data: function() {
    return {
      email: '',
      janrainId: ''
    };
  },
  methods: {
    doLogin() {
      console.log('calling login');
      const authService = Vue.authService();

      authService
        .loginViaEmail('test33@alextheward.com', 'password1')
        .then(res => {
          console.log(res);
          this.email = res.email;
          this.janrainId = res.janrainId;
        });
    }
  }
};
</script>
