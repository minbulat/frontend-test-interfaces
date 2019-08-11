import Vue from 'vue';

export default Vue.extend({
        name: 'string-field',
        data() {
            return {
                value: '',
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
            this.value = this.defaultValue;
        },
    },
);
