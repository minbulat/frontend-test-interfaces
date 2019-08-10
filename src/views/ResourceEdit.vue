<script lang="ts">
import Vue, {VNode} from "vue";
import {EditProductForm} from "@/resourses/products/EditProductForm";
import Form from "@/interfaces/forms/Form";
import FormField from "@/interfaces/forms/FormField";
import resources from "@/resources";
import {EditForm} from "@/abstracts/EditForm";

export default Vue.extend({
        name: "resource-edit",
        data() {
            return {
                tableData: {} as EditForm,
                fields: [] as FormField[],
                values: {} as any,
                isLoad: false,
                resource: '',
            };
        },
        components: {},
        created(): void {
            // this.tableData = new EditProductForm(parseInt(this.$route.params.id, 10));

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
                    this.tableData = tableObject.forms.edit;
                } else {
                    // console.log('404');
                    // TODO Error 404
                    // return this.$route.go('*')
                }

                this.tableData.fetchVales()
                    .then((data) => {
                            this.values = data;
                            this.isLoad = true;
                        },
                    );
            },
            onChange(name: string, value: any) {

                this.values[name] = value;
                // console.log("value changed", this.values);
            },
        },
        render(createElement): VNode {
            if (this.isLoad) {
                return createElement("div",
                    [this.tableData.getFields()
                        .map((field) => {
                            return createElement(field.getComponent(), {
                                props: {
                                    label: field.getLabel(),
                                    name: field.getName(),
                                    defaultValue: field.getName(),
                                    onChange: this.onChange,
                                },

                            });
                        }),
                        createElement("button", {
                            on: {
                                click: () => {
                                    this.tableData.saveVales([this.values]);
                                },
                            },

                        }, "Сохранить"),
                    ],
                );
            } else {
                return createElement("div");
            }
        },
    },
);
</script>
<style>
    .create {
        text-align: left;
    }
</style>

