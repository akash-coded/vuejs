import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state: {
    items: [],
  },
  mutations: {
    addItem(state, payload) {
      state.items = [...state.items, payload.item];
    },
    setItems(state, payload) {
      state.items = [...payload.items];
    },
    boughtItem(state, payload) {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          item.bought = true;
        }
        return item;
      });
    },
    removeItem(state, payload) {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
  },
  getters: {
    allItems(state) {
      return state.items;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
