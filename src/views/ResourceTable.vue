<template lang="pug">
    .table
        router-link(to="/dashboard/products/create") Создать
        table
            tr
                th(v-for="field in tableData.getFields()") {{ field.getLabel() }}
                th Действия
            tr(v-for="row in values")
                td(v-for="field in tableData.getFields()") {{ row[field.getName()] }}
                td
                    router-link(:to="{name:'edit', params: {id: row['id']}}") Изменить
                    br
                    router-link(:to="{name:'delete', params: {id: row['id']}}") Удалить
</template>

<script lang="ts">
    import Vue from "vue";
    import {ProductsTable} from "@/resourses/products/ProductsTable";
    import Form from "@/interfaces/forms/Form";
    import FormField from "@/interfaces/forms/FormField";
    import {AbstractForm} from "@/resourses/products/AbstractForm";
    import resources from "@/resources";

    export default Vue.extend({
            name: "resource-table",
            data() {
                return {
                    tableData: {} as AbstractForm,
                    fields: [] as FormField[],
                    values: [],
                };
            },
            created(): void {
                const tableObject = resources.find(resource => resource.name === this.$route.params.resource);
                if (tableObject) {
                    this.tableData = tableObject.forms.table
                } else {
                    console.log('404');
                    // TODO Error 404
                    // return this.$route.go('*')
                }


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

