<template lang="pug">
    .field.string
        label(:for="name") {{ label }}
        input(:id="name" type="text" v-model="value")

</template>

<script lang="ts" src="./StringField.ts"> </script>
<style lang="stylus" scoped>
    .string
        display: flex
        flex-direction column
</style>
