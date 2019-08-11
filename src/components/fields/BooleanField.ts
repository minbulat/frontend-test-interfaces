import Vue from 'vue';

export default Vue.extend({
        name: 'boolean-field',
        data() {
            return {
                value: false,
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
        },
    },
);
