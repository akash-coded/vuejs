<template>
  <div id="app">
    <h1>Shopping List</h1>
    <ShoppingList :items="items" />
    <AddItemForm @submit="addItem" />
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import AddItemForm from './components/AddItemForm.vue'

export default {
  name: 'App',
  components: {
    ShoppingList,
    AddItemForm,
  },
  data() {
    return {
      items: ['Milk', 'Eggs', 'Bread'],
    }
  },
  methods: {
    addItem(item) {
      this.items.push(item)
    },
  },
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
