<template>
  <div id="app">
    <input type="text" v-model="newItem" placeholder="Add new item" />
    <button @click="addItem">Add</button>
    <ul>
      <li v-for="(item, index) in items" v-completed="item.completed" :key="index">
        <span @click="toggleCompleted(item)">{{ item.name }}</span>
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newItem: '',
      items: [
        { name: 'Milk', completed: false },
        { name: 'Eggs', completed: true },
        { name: 'Bread', completed: false }
      ]
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push({ name: this.newItem.trim(), completed: false });
      }
      this.newItem = '';
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    toggleCompleted(item) {
      item.completed = !item.completed;
    }
  },
  directives: {
    completed: {
      bind(el, binding) {
        if (binding.value) {
          el.style.textDecoration = 'line-through';
        }
      },
      update(el, binding) {
        if (binding.value) {
          el.style.textDecoration = 'line-through';
        } else {
          el.style.textDecoration = 'none';
        }
      }
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

li {
  list-style: none;
}
</style>
