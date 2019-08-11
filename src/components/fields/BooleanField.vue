<template lang="pug">
    .field.boolean
        input(:id="name" type="checkbox" v-model="value")
        label(:for="name") {{ label }}

</template>

<script lang="ts" src="./BooleanField.ts"></script>
<style lang="stylus" scoped>
    .boolean
        input
            width auto
        label
            margin-left 10px
</style>
