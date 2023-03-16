<template>
    <div id="items-summary">
        <h2>Items Summary</h2>
        <p>Total Items: {{ totalItems }}</p>
        <p>Total Bought Items: {{ totalBoughtItems }}</p>
        <p>Total Remaining Items: {{ totalRemainingItems }}</p>
    </div>
</template>

<script>
export default {
    name: "ItemsSummary",
    computed: {
        totalItems() {
            return this.$store.getters.totalItems;
        },
        totalBoughtItems() {
            return this.$store.getters.totalBoughtItems;
        },
        totalRemainingItems() {
            return this.$store.getters.totalRemainingItems;
        },
    },
};
</script>

<style>
#items-summary {
    background-color: #f1f1f1;
    max-width: 400px;
    padding: 5px;
    margin: auto;
    border-radius: 8px;
}
</style>