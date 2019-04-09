<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getNewton($event)">Click me</button>

    <div v-show="newtonData.length > 0">
      {{ newtonData }}
    </div>
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

console.log(Newton.methods.getNewtonConfig());
</script>
