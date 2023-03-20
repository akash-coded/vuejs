<template>
    <div>
        <b-alert show>Default Alert</b-alert>
        <b-alert show variant="primary">
            This is a primary alert—check it out!
        </b-alert>
        <b-alert show variant="secondary">
            This is a secondary alert—check it out!
        </b-alert>
        <b-alert show variant="success">
            This is a success alert—check it out!
        </b-alert>
        <b-alert show variant="danger">
            This is a danger alert—check it out!
        </b-alert>
        <b-alert show variant="warning">
            This is a warning alert—check it out!
        </b-alert>
        <b-alert show variant="info">
            This is a info alert—check it out!
        </b-alert>
        <b-alert show variant="light">
            This is a light alert—check it out!
        </b-alert>
        <b-alert show variant="dark">
            This is a dark alert—check it out!
        </b-alert>
        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
        </b-alert>
        <b-alert :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
            <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
        </b-alert>

        <b-button @click="showAlert" variant="info" class="m-1">
            Show alert with count-down timer
        </b-button>
        <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
            Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
        </b-button>
    </div>
</template>

<script>
export default {
    name: 'BSVueAlerts',
    data() {
        return {
            dismissSecs: 10,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>