import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload);
    },
    setItems(context, payload) {
      context.commit("setItems", payload);
    },
    boughtItem(context, payload) {
      context.commit("boughtItem", payload);
    },
    removeItem(context, payload) {
      context.commit("removeItem", payload);
    },
  },
  getters: {
    allItems(state) {
      return state.items;
    },
    totalItems(state) {
      return state.items.length;
    },
    totalBoughtItems(state) {
      return state.items.filter((item) => item.bought).length;
    },
    totalRemainingItems(state) {
      return state.items.filter((item) => !item.bought).length;
    },
  },
});
