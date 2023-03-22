<template>
    <div>
        Total: {{ total }}
    </div>
</template>
  
<script>
/* eslint-disable */
export default {
    name: 'TotalPrice',
    inject: ['items'],
    computed: {
        total() {
            return this.items.reduce((acc, item) => acc + item.price, 0)
        }
    }
}
</script>