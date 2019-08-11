import Vue from 'vue';

export default Vue.extend({
        name: 'string-field',
        data() {
            return {
                value: null as null | string,
            };
        },
        props: ['name', 'label', 'onChange', 'defaultValue'],
        watch: {
            value(value) {
                this.onChange(this.name, value);
            },
            defaultValue(value) {
                this.value = value;
            },
        },
        mounted(): void {
            if (this.defaultValue) {
                this.value = this.defaultValue;
            }

            this.onChange(this.name, this.value);
        },
    },
);
