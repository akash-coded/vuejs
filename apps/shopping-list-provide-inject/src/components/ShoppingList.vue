<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }} - {{ item.price }}</li>
        </ul>
        <TotalPrice class="total-price" />
        <!-- Fallthrough Attribute -->
    </div>
</template>
  
<script>
import TotalPrice from './TotalPrice.vue'

export default {
    name: 'ShoppingList',
    components: {
        TotalPrice
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    provide() {
        return {
            items: this.items
        }
    }
}
</script>

<style>
.total-price {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
}
</style>