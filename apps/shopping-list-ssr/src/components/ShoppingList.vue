<!-- ShoppingList.vue -->
<template>
    <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
</template>
  
<script>
export default {
    name: 'ShoppingList',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>