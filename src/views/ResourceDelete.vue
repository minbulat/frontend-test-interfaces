<template lang="pug">
    .delete.wrapper
        error(v-if="error && error.length > 0 " :error="error")
        div(v-if="isLoad")
            h2 Удаление объекта id={{id}} ресурса «{{resource}}»
            p Вы действительно хотите удалить?
            button.button(@click="deleteRes") Удалить
        loading(v-else)
</template>
<script lang="ts">
import Vue, {VNode} from "vue";
import FormField from "@/interfaces/forms/FormField";
import resources from "@/resources";
import {EditForm} from "@/abstracts/EditForm";
import Error from "@/components/Error.vue";
import Loading from "@/components/Loading.vue";
import {DeleteForm} from "@/abstracts/DeleteForm";
import FormSubmitter from "@/abstracts/FormSubmitter";

export default Vue.extend({
        name: "resource-delete",
        data() {
            return {
                form: {} as DeleteForm,
                submitter: {} as FormSubmitter,
                id: null as number | null,
                isLoad: false,
                resource: null as string | null,
                error: [] as string[],
            };
        },
        components: {Error, Loading},
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
                    this.form = tableObject.forms.delete;
                    this.submitter = tableObject.forms.submitter;
                } else {
                    // console.log('404');
                    // TODO Error 404
                    // return this.$route.go('*')
                    this.error = ['Такого ресурса нет'];
                }
                if (tableObject && this.id) {
                    this.form.setId(this.id);
                    this.isLoad = true;
                } else {
                    // TODO Error 404
                    this.error = ['Не заполнен id'];
                }

            },

            deleteRes() {
                this.isLoad = false;
                this.error = [];
                this.form.deleteResource()
                    .then(() => {
                        this.$router.push({name: 'table', params: {resource: this.resource as string}});
                    })
                    .catch((error) => {
                        this.isLoad = true;
                        this.error = ['Не удалось удалить', error.text];
                    });
            },

        },
    },
);
</script>
<style lang="stylus">
    .delete
        .button
            width 100%
            font-size 20px
            padding 20px 30px
            margin 20px 0
</style>

