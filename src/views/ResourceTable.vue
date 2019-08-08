<template lang="pug">
    .table
        router-link(to="/dashboard/products/create") Создать
        table
            tr
                th(v-for="field in tableData.getFields()") {{ field.getLabel() }}
            tr(v-for="row in values")
                td(v-for="field in tableData.getFields()") {{ row[field.getName()] }}
</template>

<script lang="ts">
    import Vue from "vue";
    import {ProductsTable} from "@/resourses/products/ProductsTable";
    import Form from "@/interfaces/forms/Form";
    import FormField from "@/interfaces/forms/FormField";

    export default Vue.extend({
            name: "resource-table",
            data() {
                return {
                    tableData: {} as ProductsTable,
                    fields: [] as FormField[],
                    values: [],
                };
            },
            created(): void {
                this.tableData = new ProductsTable();

            },
            mounted(): void {
                this.tableData.fetchVales()
                    .then(response => {
                            this.values = response.data;
                        }
                    );

            }
        },
    );
</script>
<style>
    table, tr, th, td {
        border: 1px black solid;
        border-collapse: collapse;
    }

    table {
        width: 100%;
    }

    th, td {
        padding: 10px 20px;
    }
</style>

