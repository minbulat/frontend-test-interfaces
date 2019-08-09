import Vue from 'vue';

export default Vue.extend({
        name: 'string-field',
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
