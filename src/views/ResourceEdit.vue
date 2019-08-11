<script lang="ts">
    import Vue, {VNode} from "vue";
    import FormField from "@/interfaces/forms/FormField";
    import resources from "@/resources";
    import {EditForm} from "@/abstracts/EditForm";
    import Error from "@/components/Error.vue";
    import Loading from "@/components/Loading.vue";
    import FormSubmitter from "@/abstracts/FormSubmitter";

    export default Vue.extend({
            name: "resource-edit",
            data() {
                return {
                    form: {} as EditForm,
                    submitter: {} as FormSubmitter,
                    fields: [] as FormField[],
                    id: null as number | null,
                    values: {} as any,
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
                        this.submitter = tableObject.forms.submitter;
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
                },
                saveValues() {
                    this.isLoad = false;
                    this.error = [];
                    this.form.saveValues(this.submitter, this.values)
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
                    {class: ['edit', 'wrapper']},
                    [
                        this.error.length ? createElement(Error, {
                            props: {
                                error: this.error,
                            },
                        }) : null,
                        this.isLoad ? createElement("h2",
                            `Редактирование ресурса «${this.resource}», id:${this.id}`):null,
                        this.isLoad ? createElement("form", {
                                on: {
                                    submit: this.saveValues,
                                }
                            },
                            [
                                this.form.getFields()
                                    .map((field) => {
                                        return createElement(field.getComponent(), {
                                            props: {
                                                label: field.getLabel(),
                                                name: field.getName(),
                                                defaultValue: this.form.getValues()[field.getName()],
                                                onChange: this.onChange,
                                            },

                                        });
                                    }),
                                createElement("button", {
                                    class: ['button'],

                                }, "Изменить"),
                            ]) : null,
                        !this.isLoad ? createElement(Loading) : null,
                    ],
                );

            },
        },
    );
</script>
<style lang="stylus">
    .edit
        .button
            width 100%
            font-size 20px
            padding 20px 30px
            margin 20px 0
</style>

