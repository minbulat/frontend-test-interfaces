<template lang="pug">
    .table(v-if="isLoad")
        router-link(:to="{name:'create',params:{resource}}") Создать
        table
            tr
                th(v-for="field in tableData.getFields()") {{ field.getLabel() }}
                th Действия
            tr(v-for="row in values")
                td(v-for="field in tableData.getFields()") {{ row[field.getName()] }}
                td
                    router-link(:to="{name:'edit', params: {id: row['id'], resource}}") Изменить
                    br
                    router-link(:to="{name:'delete', params: {id: row['id'], resource}}") Удалить
</template>

<script lang="ts">
import Vue from "vue";
import FormField from "@/interfaces/forms/FormField";
import resources from "@/resources";
import {Table} from "@/abstracts/Table";

export default Vue.extend({
        name: "resource-table",
        data() {
            return {
                resource: "",
                tableData: {} as Table,
                fields: [] as FormField[],
                values: [],
                isLoad: false,
            };
        },
        mounted(): void {
            this.resource = this.$route.params.resource;
            this.updateData();

        },
        beforeRouteUpdate(to, from, next) {
            this.resource = to.params.resource;
            this.isLoad = false;
            this.updateData();
            next();
        },
        methods: {
            updateData() {
                const tableObject = resources.find((resource) => resource.name === this.resource);
                if (tableObject) {
                    this.tableData = tableObject.forms.table;
                } else {
                    // console.log('404');
                    // TODO Error 404
                    // return this.$route.go('*')
                }

                this.tableData.fetchVales()
                    .then((response) => {
                            this.values = response.data;
                            this.isLoad = true;
                        },
                    );
            },
        },
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

