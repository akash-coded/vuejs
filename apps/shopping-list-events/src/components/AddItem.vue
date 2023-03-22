<template>
    <div>
        <h2>Add Item</h2>
        <form @submit.prevent="addItem">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name"><br />
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" v-model.number="quantity"><br />
            <button type="submit">Add Item</button>
        </form>
    </div>
</template>
  
<script>
import { eventBus } from '../event-bus';

export default {
    data() {
        return {
            name: '',
            quantity: 1
        }
    },
    methods: {
        addItem() {
            eventBus.$emit('add-item', {
                name: this.name,
                quantity: this.quantity
            });
            this.name = '';
            this.quantity = 1;
        }
    }
}
</script>