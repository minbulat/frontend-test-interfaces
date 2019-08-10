<template lang="pug">
    .error
        p(v-for="err in error") {{ error }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'error',
        props: {
            error: [],
        },
    });
</script>

<style scoped lang="stylus">
    .error
        color white
        background crimson
</style>
