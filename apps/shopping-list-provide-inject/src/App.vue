<template>
  <div id="app">
    <h1>Shopping List App</h1>
    <div class="container">
      <add-item @newItemEvent="addItemToShoppingList" />
      <shopping-list :items="items" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import AddItem from './components/AddItem.vue'

export default {
  name: 'App',
  components: {
    AddItem,
    ShoppingList: defineAsyncComponent(() =>
      import('./components/ShoppingList.vue') // Async component
    )
  },
  data() {
    return {
      items: [
        { name: 'Apples', price: 1.99 },
        { name: 'Bananas', price: 0.99 },
        { name: 'Oranges', price: 2.49 }
      ]
    }
  },
  methods: {
    addItemToShoppingList(newItem) {
      if (!this.items) {
        this.items = [] // Initialize the items array if it is not defined
      }
      this.items.push(newItem)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.container {
  background-color: #24e02dd2;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
}

li {
  font-size: 1.5rem;
  list-style: none;
}

button {
  margin-top: 5px;
  background-color: #3498db;
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

input {
  margin-top: 5px;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.bought {
  text-decoration: line-through;
}
</style>
