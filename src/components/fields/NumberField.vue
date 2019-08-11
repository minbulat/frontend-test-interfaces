<template lang="pug">
    .field.number
        label(:for="name") {{ label }}
        input(:id="name" type="number" v-model="value")

</template>

<script lang="ts" src="./NumberField.ts"></script>
<style lang="stylus" scoped>
    .number
        display: flex
        flex-direction column
</style>