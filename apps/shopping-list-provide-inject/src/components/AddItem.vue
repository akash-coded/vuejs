<template>
    <form @submit.prevent="addItem">
        <div>
            <label for="item-name">Item Name:</label>
            <input type="text" id="item-name" v-model="newItemName" placeholder="Add a new item...">
        </div>
        <div>
            <label for="item-price">Item Price:</label>
            <input type="number" id="item-price" v-model="newItemPrice" placeholder="0.00">
        </div>
        <button type="submit">Add Item</button>
    </form>
</template>
  
<script>
export default {
    name: 'AddItem',
    data() {
        return {
            newItemName: '',
            newItemPrice: 0
        }
    },
    newItemEvent: {
        submit: (newItem) => {
            return newItem.name.trim() !== ' ';
        }
    },
    methods: {
        addItem() {
            // Create a new item object with the name and price
            const newItem = {
                name: this.newItemName.trim(),
                price: parseFloat(this.newItemPrice)
            };

            // Call the $emit method to emit an event with the new item
            this.$emit('newItemEvent', newItem);

            // Reset the form fields
            this.newItemName = '';
            this.newItemPrice = 0;
        }
    }
}
</script>