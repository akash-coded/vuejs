<!-- AddItemForm.vue -->
<template>
    <form @submit.prevent="submit">
        <label>
            Add Item:
            <input type="text" v-model="itemName" />
        </label>
        <button>Add</button>
    </form>
</template>
  
<script>
export default {
    name: 'AddItemForm',
    data() {
        return {
            itemName: '',
        }
    },
    methods: {
        submit() {
            this.$emit('submit', this.itemName)
            this.itemName = ''
        },
    },
}
</script>