<script lang="ts">
    import Vue, {VNode} from "vue";
    import FormField from "@/interfaces/forms/FormField";
    import {CreateForm} from "@/abstracts/CreateForm";
    import resources from "@/resources";
    import Error from "@/components/Error.vue";

    export default Vue.extend({
            name: "resource-create",
            data() {
                return {
                    form: {} as CreateForm,
                    fields: [] as FormField[],
                    values: {} as any,
                    isLoad: false,
                    resource: null as string | null,
                    error: [] as string[],
                };
            },
            components: {},
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
                        this.form = tableObject.forms.create;
                        this.isLoad = true;
                    } else {
                        // console.log('404');
                        // TODO Error 404
                        // return this.$route.go('*')
                        this.error = ['Такого ресурса нет'];
                    }
                },
                onChange(name: string, value: any) {

                    this.values[name] = value;
                    // console.log("value changed", this.values);
                },
                saveValues() {
                    this.isLoad = false;
                    this.error = [];
                    // console.log('create-save', this.values);
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
                    {class: ['create', 'wrapper']},
                    [
                        this.isLoad ? createElement("h2",
                        `Создание ресурса «${this.resource}»`
                        ) : null,
                        this.error.length ? createElement(Error, {
                            props: {
                                error: this.error,
                            },
                        }) : null,
                        this.isLoad ? createElement("form", {
                            on: {
                                submit: this.saveValues,
                            }
                        }, [
                            this.form.getFields()
                                .map((field) => {
                                    return createElement(field.getComponent(), {
                                        props: {
                                            label: field.getLabel(),
                                            name: field.getName(),
                                            onChange: this.onChange,
                                        },

                                    });
                                }),
                            createElement("button", {
                                class: ['button'],
                            }, "Создать")
                        ]) : null,


                    ],
                );
            },
        },
    );
</script>
<style lang="stylus">
    .create
        .button
            width 100%
            font-size 20px
            padding 20px 30px
            margin 20px 0
</style>

