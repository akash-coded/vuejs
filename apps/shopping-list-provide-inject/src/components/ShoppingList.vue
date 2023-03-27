<template>
    <div>
        <transition-group name="fade" tag="ul">
            <li v-for="item in items" :key="item.id">{{ item.name }} - {{ item.price }}</li>
        </transition-group>
        <TotalPrice class="total-price" />
        <!-- Fallthrough Attribute -->
    </div>
</template>
  
<script>
import TotalPrice from './TotalPrice.vue'
import { TransitionGroup } from 'vue';

export default {
    name: 'ShoppingList',
    components: {
        TotalPrice,
        TransitionGroup
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>