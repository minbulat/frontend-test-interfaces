<template lang="pug">
    .string
        input(:id="name" type="checkbox" v-model="value")
        label(:for="name") {{ label }}

</template>

<script lang="ts" src="./BooleanField.ts"> </script>
