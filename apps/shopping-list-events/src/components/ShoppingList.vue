<template>
    <div>
        <h2>Shopping List</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item.name }} - {{ item.quantity }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import { eventBus } from '../event-bus';

export default {
    data() {
        return {
            items: []
        }
    },
    mounted() {
        eventBus.$on('add-item', item => {
            this.items.push(item);
        });
    }
}
</script>