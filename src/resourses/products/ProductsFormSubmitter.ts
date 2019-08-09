import Form from '@/interfaces/forms/Form';
import FormSubmitter from "@/abstracts/FormSubmitter";


// TODO Исправить
// tslint:disable-next-line:no-var-requires
const axios = require('axios');

export class ProductsFormSubmitter implements FormSubmitter {
    public submit(form: Form, values: any[]): Promise<any> {
        return axios({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values.length === 1 ? values[0] : values, // TODO Выяснить про значения
        });
    }

}
