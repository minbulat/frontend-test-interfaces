import Vue from 'vue';

export default Vue.extend({
        name: 'boolean-field',
        data() {
            return {
                value: '',
            };
        },
        props: ['name', 'label', 'onChange'],
        watch: {
            value(value) {
                this.onChange(this.name, value);
            },
        },
    },
);
