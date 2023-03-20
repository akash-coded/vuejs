<template>
    <div>
        <b-button v-b-modal.my-modal-1>Launch demo my-modal</b-button>

        <b-modal id="my-modal-1" title="Demo Modal-1">
            <p class="my-4">Modal body text goes here.</p>
        </b-modal>

        <!-- ---------------------------------------------------------------------- -->

        <b-button id="show-btn" @click="showModal">Show Modal</b-button>

        <b-modal ref="my-modal-2" hide-footer title="My Modal-2">
            <div class="d-block text-center">
                <b-spinner class="align-middle"></b-spinner>
                <strong class="align-middle">Loading...</strong>
            </div>
            <b-button class="mt-3" variant="outline-danger" @click="hideModal">Hide Me</b-button>
            <b-button class="mt-3" variant="outline-warning" @click="sendRequest">Send Request</b-button>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'BSVueModals',
    methods: {
        showModal() {
            this.$refs['my-modal-2'].show()
        },
        hideModal() {
            this.$refs['my-modal-2'].hide()
        },
        sendRequest() {
            // code to make an API request
        }
    }
}
</script>