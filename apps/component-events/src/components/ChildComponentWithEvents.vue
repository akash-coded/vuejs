<template>
    <button @click="$emit('someEvent')">Click me</button>
    <hr />
    <button @click="$emit('increaseBy', 2)">
        Increase by 2
    </button>
</template>

<script>
export default {
    name: 'ChildComponentWithEvents',
    emits: ['someEvent', 'increaseBy']
}
</script>