<template lang="pug">
    .table(v-if="isLoad")
        h2 Ресурс &laquo;{{ resource }}&raquo;
        .add
            router-link.button(:to="{name:'create',params:{resource}}") Создать
        table
            tr
                th(v-for="field in tableData.getFields()") {{ field.getLabel() }}
                th Действия
            tr(v-for="row in values")
                td(v-for="field in tableData.getFields()") {{ field.valueToStr(row[field.getName()]) }}
                td.actions
                    router-link.button.edit(:to="{name:'edit', params: {id: row['id'], resource}}") Изменить
                    router-link.button.delete(:to="{name:'delete', params: {id: row['id'], resource}}") Удалить
    loading(v-else)
</template>

<script lang="ts">
    import Vue from "vue";
    import FormField from "@/interfaces/forms/FormField";
    import resources from "@/resources";
    import {Table} from "@/abstracts/Table";
    import Loading from "@/components/Loading.vue";

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
            components: {Loading},
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

                    this.tableData.fetchValues()
                        .then((data) => {
                                this.values = data;
                                this.isLoad = true;
                            },
                        );
                },
            },
        },
    );
</script>
<style lang="stylus">

    table
        width: 100%;

    td
        border-bottom 1px #f6f2f1 solid

    th
        padding: 10px 20px;

    td
        padding: 20px 20px;

    th
        color white
        background var(--color-main)

    .add
        padding 20px 0
        text-align right

        .button
            background var(--color-success)

    .button.delete
        background var(--color-warning)

    .button.edit
        background var(--color-info)

    .actions
        text-align center;
</style>

