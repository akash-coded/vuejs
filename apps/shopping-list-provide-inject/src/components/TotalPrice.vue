<template>
    <p>Total: {{ total }}</p>

    <!-- <div>
        <p v-bind="$attrs">Total: {{ total }}</p>
    </div> -->
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
    },
    created() {
        console.log(this.$attrs)
    }
}
</script>