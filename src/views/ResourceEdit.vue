<script lang="ts">
    import Vue, {VNode} from "vue";
    import {EditProductForm} from "@/resourses/products/EditProductForm";
    import Form from "@/interfaces/forms/Form";
    import FormField from "@/interfaces/forms/FormField";

    export default Vue.extend({
            name: "resource-edit",
            data() {
                return {
                    tableData: {} as EditProductForm,
                    fields: [] as FormField[],
                    values: {} as any,
                };
            },
            components: {},
            created(): void {
                this.tableData = new EditProductForm(parseInt(this.$route.params.id));

            },
            mounted: void {},
            methods: {
                onChange: function (name: string, value: any) {

                    this.values[name] = value;
                    console.log("value changed", this.values);
                }
            },
            render(createElement): VNode {
                return createElement("div",
                    [this.tableData.getFields()
                        .map((field) => {
                            return createElement(field.getComponent(), {
                                props: {
                                    label: field.getLabel(),
                                    name: field.getName(),
                                    // defaultValue:
                                    onChange: this.onChange,
                                }

                            });
                        }),
                        createElement("button", {
                            on: {
                                click: () => {
                                    this.tableData.saveVales([this.values]);
                                }
                            },

                        }, "Сохранить")
                    ]
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

