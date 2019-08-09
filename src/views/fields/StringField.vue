<template lang="pug">
    .string
        label(:for="name") {{ label }}
        input(:id="name" type="text" v-model="value")

</template>

<script lang="ts" src="./StringField.ts"> </script>
