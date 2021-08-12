<template>
  <div id="app">
      <router-view/>
    <tarbarmain></tarbarmain>
  </div>
</template>

<script>
import tarbarmain from '~/content/tarbarmain.vue'
export default {
  name: 'App',
  components: {
    tarbarmain
  },
}
</script>

<style>
@import 'assets/css/main.css';
</style>
