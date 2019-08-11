<script lang="ts">
    import Vue, {VNode} from "vue";
    import FormField from "@/interfaces/forms/FormField";
    import resources from "@/resources";
    import {EditForm} from "@/abstracts/EditForm";
    import Error from "@/components/Error.vue";

    export default Vue.extend({
            name: "resource-edit",
            data() {
                return {
                    form: {} as EditForm,
                    fields: [] as FormField[],
                    id: null as number | null,
                    values: {} as any,  // TODO Del
                    isLoad: false,
                    resource: null as string | null,
                    error: [] as string[],
                };
            },
            components: {},
            created(): void {
                this.id = parseInt(this.$route.params.id, 10);

            },
            mounted(): void {
                this.resource = this.$route.params.resource;
                this.updateData();
            },
            beforeRouteUpdate(to, from, next) {
                this.resource = to.params.resource;
                this.id = parseInt(this.$route.params.id, 10);
                this.isLoad = false;
                this.updateData();
                next();
            },
            methods: {
                updateData() {
                    const tableObject = resources.find((resource) => resource.name === this.resource);
                    if (tableObject) {
                        this.form = tableObject.forms.edit;
                    } else {
                        // console.log('404');
                        // TODO Error 404
                        // return this.$route.go('*')
                        this.error = ['Такого ресурса нет'];
                    }
                    if (tableObject && this.id) {
                        this.form.setId(this.id);
                        this.form.fetchValues()
                            .then((data) => {
                                    this.values = data;
                                    this.isLoad = true;
                                    // console.log('values',this.values)
                                },
                            )
                            .catch((error) => this.error = ["Не удалось загрузить данные", error.text]);
                    } else {
                        // TODO Error 404
                        this.error = ['Не заполнен id'];
                    }

                },
                onChange(name: string, value: any) {

                    this.values[name] = value;
                    // console.log("value changed", this.values);
                },
                saveValues() {
                    this.isLoad = false;
                    this.error = [];
                    this.form.saveValues(this.values)
                        .then(() => {
                            this.$router.push({name: 'table', params: {resource: this.resource as string}});
                        })
                        .catch((error) => {
                            this.isLoad = true;
                            this.error = ['Не удалось сохранить', error.text];
                        });
                },

            },
            render(createElement): VNode {
                return createElement("div",
                    {class: ['edit']},
                    [
                        this.error.length ? createElement(Error, {
                            props: {
                                error: this.error,
                            },
                        }) : null,
                        this.isLoad ? this.form.getFields()
                            .map((field) => {
                                return createElement(field.getComponent(), {
                                    props: {
                                        label: field.getLabel(),
                                        name: field.getName(),
                                        defaultValue: this.form.getValues()[field.getName()],
                                        onChange: this.onChange,
                                    },

                                });
                            }) : null,
                        this.isLoad ? createElement("button", {
                            on: {
                                click: this.saveValues,
                            },

                        }, "Сохранить") : null,
                    ],
                );

            },
        },
    );
</script>
<style lang="stylus">
    .edit
        text-align left

</style>

