import { createApp } from "vue";
import App from "./App.vue";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

createApp({
  template: `<App />`,
  components: {
    App,
  },
}).mount("#app");
