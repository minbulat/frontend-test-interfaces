<template lang="pug">
    div
        error(v-if="error && error.length > 0 " :error="error")
        .table(v-if="isLoad")
            h2 Ресурс &laquo;{{ resource }}&raquo;
            .add
                router-link.button(:to="{name:'create',params:{resource}}") Создать
            table
                tr
                    th(v-for="field in tableData.getFields()") {{ field.getLabel() }}
                    th Действия
                tr(v-for="row in values")
                    td(v-for="field in tableData.getFields()") {{ field.valueToStr(pick(field.getName(), row))  }}
                    td.actions
                        router-link.button.edit(:to="{name:'edit', params: {id: row['id'], resource}}") Изменить
                        router-link.button.delete(:to="{name:'delete', params: {id: row['id'], resource}}") Удалить
        loading(v-if="!isLoad && !(error && error.length>0)")
</template>

<script lang="ts">
    import Vue from "vue";
    import FormField from "@/interfaces/forms/FormField";
    import resources from "@/resources";
    import {Table} from "@/abstracts/Table";
    import Loading from "@/components/Loading.vue";
    import Error from "@/components/Error.vue";
    const dot = require('dot-object');

    export default Vue.extend({
            name: "resource-table",
            data() {
                return {
                    resource: "",
                    tableData: {} as Table,
                    fields: [] as FormField[],
                    values: [],
                    error: [] as string[],
                    isLoad: false,
                };
            },
            components: {Loading, Error},
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
                pick(str:string, obj: any){
                    return dot.pick(str, obj);
                },
                updateData() {
                    this.error = [];
                    const tableObject = resources.find((resource) => resource.name === this.resource);
                    if (tableObject) {
                        this.tableData = tableObject.forms.table;
                        this.tableData.fetchValues()
                            .then((data) => {
                                    this.values = data;
                                    this.isLoad = true;
                                },
                            );
                    } else {
                        this.error = ['Такого ресурса нет'];
                    }


                },
            },
        },
    );
</script>
<style lang="stylus" scoped>

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

    .wrapper
        max-width calc(100% - 20px);

</style>

