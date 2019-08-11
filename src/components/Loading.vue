<template>
    <div class="wrapper">
        <div class="lds-ripple"><div></div><div></div></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'error',
        props: ['error'],
    });
</script>

<style scoped>
    .wrapper{
        text-align: center;
        padding: 50px;
    }
    /* https://loading.io/css */
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid var(--color-main);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
            top: 100px;
            left: 100px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: -1px;
            left: -1px;
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

</style>
