<template lang="pug">
    .string
        label(:for="name") {{ label }}
        input(:id="name" type="number" v-model="value")

</template>

<script lang="ts" src="./NumberField.ts"> </script>
