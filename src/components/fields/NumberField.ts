import Vue from 'vue';

export default Vue.extend({
        name: 'number-field',
        data() {
            return {
                value: null as null | number,
            };
        },
        props: ['name', 'label', 'onChange', 'defaultValue'],
        watch: {
            value(value) {
                this.onChange(this.name, value || value === 0 ? parseInt(value) : null); // TODO error
            }, defaultValue(value) {
                this.value = value;
            },
        },
        mounted(): void {
            if (this.defaultValue) {
                this.value = this.defaultValue;
            }
        },
    },
)
;
