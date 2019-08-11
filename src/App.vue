<template lang="pug">
    #app
        #nav
            router-link.button(to="/") Home
            router-link.button(v-for="resource in resources" :to="{name: 'table', params: {resource: resource.name}}") {{resource.name}}
        router-view
</template>
<script lang="ts">
    import Vue from 'vue';
    import resources from "@/resources";


    export default Vue.extend({
        name: 'app',
        data: {
            resources: {}
        },
        created(): void {
            this.resources = resources
        }
    });
</script>

<style lang="stylus">
    #app
        --color-main #ef5350
        --color-text #2c3e50
        --color-success #009944
        --color-error #cf000f
        --color-warning #f0541e
        --color-info #63c0df

        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: var(--color-text);

    #nav
        padding 30px
        text-align center
        .button
            margin 10px
        .router-link-exact-active
            background-color white
            color var(--color-main)
            border solid 1px var(--color-main)

    .button
        background-color var(--color-main)
        padding 10px 20px
        /**/
        text-decoration none
        color: white
        border none
        cursor pointer

    .wrapper
        max-width calc(100% - 20px)
        margin 0 auto
    .field
        input
            padding 10px
            margin 10px 0
            width calc(100% - 20px)
    h2
        text-align center
        font-weight normal
</style>
