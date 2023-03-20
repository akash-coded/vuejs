<template>
  <div id="app">
    <BSVueAlerts />
    <hr />
    <BSVueModals />
  </div>
</template>

<script>
import BSVueAlerts from "./components/BSVueAlerts.vue";
import BSVueModals from "./components/BSVueModals.vue";

export default {
  name: "App",
  components: {
    BSVueAlerts,
    BSVueModals
  },
};
</script>
