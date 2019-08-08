<template lang="pug">
    .table
        table
            tr
                th(v-for="field in table.getFields()") {{ field.getLabel() }}
</template>

<script lang="ts">
    import Vue from 'vue';
    import {ProductsTable} from "@/resourses/products/ProductsTable"
    import Form from "@/interfaces/forms/Form";

    export default Vue.extend({
            name: 'table',
            data() {
                return {
                    table: {}
                }
            },
            mounted():                void {
                this.table = new ProductsTable();
            }
        },
    )
    ;
</script>

