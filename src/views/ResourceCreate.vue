<script lang="ts">
    import Vue, {VNode} from "vue";
    import {CreateProductForm} from "@/resourses/products/CreateProductForm";
    import Form from "@/interfaces/forms/Form";
    import FormField from "@/interfaces/forms/FormField";
    import {CreateForm} from "@/abstracts/CreateForm";
    import resources from "@/resources";

    export default Vue.extend({
            name: "resource-create",
            data() {
                return {
                    tableData: {} as CreateForm,
                    fields: [] as FormField[],
                    values: {} as any,
                    isLoaded: false,
                };
            },
            components: {},
            created(): void {
                const tableObject = resources.find(resource => resource.name === this.$route.params.resource);
                if (tableObject) {
                    this.tableData = tableObject.forms.create
                } else {
                    console.log('404');
                    // TODO Error 404
                    // return this.$route.go('*')
                }


            },
            methods: {
                onChange: function (name: string, value: any) {

                    this.values[name] = value;
                    console.log("value changed", this.values);
                }
            },
            render(createElement): VNode {
                if (this.isLoaded) {
                    return createElement("div",
                        [this.tableData.getFields()
                            .map((field) => {
                                return createElement(field.getComponent(), {
                                    props: {
                                        label: field.getLabel(),
                                        name: field.getName(),
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
                } else {
                    return createElement("div");
                }
            }
        },
    );
</script>
<style>
    .create {
        text-align: left;
    }
</style>

