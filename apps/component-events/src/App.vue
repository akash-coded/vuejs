<template>
  <div id="app">
    <ParentComponentWithListeners />
  </div>
</template>

<script>
import ParentComponentWithListeners from './components/ParentComponentWithListeners.vue';

export default {
  name: 'App',
  components: {
    ParentComponentWithListeners
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
