<!--<template lang="pug">-->
<!--    .create-->
<!--        .field(v-for="field in tableData.getFields()") {{ field.getLabel() }} {{ field.getComponent() }}-->
<!--</template>-->

<script lang="ts">
    import Vue, {VNode} from "vue";
    import {CreateProductForm} from "@/resourses/products/CreateProductForm";
    import Form from "@/interfaces/forms/Form";
    import FormField from "@/interfaces/forms/FormField";

    export default Vue.extend({
            name: "resource-create",
            data() {
                return {
                    tableData: {} as CreateProductForm,
                    fields: [] as FormField[],
                    values: [],
                };
            },
            components: {},//(new CreateProductForm).getFields().map(f=>f.getComponent()),
            created(): void {
                this.tableData = new CreateProductForm();

            },
            render(createElement): VNode {
                return createElement("div",
                    this.tableData.getFields()
                        .map(function(field) {
                            return createElement(field.getComponent(), {
                                props: {
                                    label: field.getLabel(),
                                    name: field.getName(),
                                }

                            });
                        })
                );
            }
        },
    );
</script>
<style>
    .create {
        text-align: left;
    }
</style>

