<template>
  <div id="app">
    <div>
      <h1>Shopping List</h1>
      <ul>
        <li v-for="item in items" :key="item.name">
          {{ item.name }} - {{ formatCurrency(item.price) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const currencyMixin = {
  methods: {
    formatCurrency(value) {
      return "$" + Number(value).toFixed(2);
    },
  }
};

export default {
  name: 'App',
  mixins: [currencyMixin],
  data() {
    return {
      items: [
        { name: 'Milk', price: 2.4956 },
        { name: 'Eggs', price: 1.993 },
        { name: 'Bread', price: 3.49 }
      ]
    }
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
