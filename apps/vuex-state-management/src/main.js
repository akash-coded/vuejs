import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    getDoubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {
    async increment(context) {
      context.commit({
        type: "increment",
        amount: 10,
      });
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");

store.commit({
  type: "increment",
  amount: 10,
});
console.log(store.state.count);
console.log(store.getters.getDoubleCount);

store.dispatch("increment");
