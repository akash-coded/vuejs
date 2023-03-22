<template>
    <div>
        <h2>Parent Component</h2>
        <ChildComponentWithEvents @someEvent="handleSomeEvent" @increaseBy="increaseCount" />
        <p>Count: {{ count }}</p>
    </div>
</template>

<script>
import ChildComponentWithEvents from './ChildComponentWithEvents.vue'

export default {
    name: 'ParentComponentWithListeners',
    data() {
        return {
            count: 0
        }
    },
    components: {
        ChildComponentWithEvents
    },
    methods: {
        handleSomeEvent() {
            alert('someEvent was emitted from ChildComponentWithEvents');
        },
        increaseCount(n) {
            this.count += n
        }
    }
}
</script>