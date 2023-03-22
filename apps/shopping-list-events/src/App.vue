<template>
  <div id="app">
    <div class="container">
      <AddItem />
    </div>
    <hr />
    <div class="container">
      <ShoppingList />
    </div>
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue';
import ShoppingList from './components/ShoppingList.vue';

export default {
  name: 'App',
  components: {
    AddItem,
    ShoppingList
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
