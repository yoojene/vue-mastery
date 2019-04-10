<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Newton from '@/services/Newton.vue';

export default {
  name: 'home',
  data() {
    return {
      newtonData: []
    };
  },
  created() {
    // const newton = new Newton();
    // console.log(newton);
  },
  components: {
    HelloWorld
  }
};
</script>
