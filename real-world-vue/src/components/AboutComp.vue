<template>
  <h1 v-show="isAbout">This is an GET OUT page</h1>
</template>
<script>
export default {
  name: 'AboutComponent',
  props: {
    isAbout: {
      type: Boolean,
      default: true
    }
  }
};
</script>
