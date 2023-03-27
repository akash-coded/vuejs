<template>
    <div>
        <h1>My Shopping List</h1>
        <ul>
            <slot name="item" v-for="(item, index) in items" :item="item" :index="index">
                <li>{{ item }}</li>
            </slot>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: "ShoppingList",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>