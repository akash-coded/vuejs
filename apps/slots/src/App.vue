<template>
  <div id="app">
    <ShoppingList :items="items">
      <template v-slot:item="{ item, index }">
        <li :class="{ done: item.done }">
          {{ index + 1 }}. {{ item.name }}
          <button @click="markDone(index)">Done</button>
        </li>
      </template>
    </ShoppingList>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'

export default {
  name: 'App',
  components: {
    ShoppingList
  },
  data() {
    return {
      items: [
        { name: 'Apples', done: false },
        { name: 'Bananas', done: true },
        { name: 'Oranges', done: false },
      ],
    };
  },
  methods: {
    markDone(index) {
      this.items[index].done = true;
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

.done {
  text-decoration: line-through;
}
</style>
