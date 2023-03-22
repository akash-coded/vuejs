<template>
    <button @click="$emit('someEvent')">Click me</button>
    <hr />
    <button @click="$emit('increaseBy', 1)">
        Increase by 1
    </button>
</template>

<script>
export default {
    name: 'ChildComponentWithEvents',
    emits: ['someEvent', 'increaseBy']
}
</script>