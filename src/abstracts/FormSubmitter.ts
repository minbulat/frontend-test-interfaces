import FS from '@/interfaces/forms/FormSubmitter';
import Form from '@/interfaces/forms/Form';

// TODO Исправить
// tslint:disable-next-line:no-var-requires
const axios = require('axios');

export default class FormSubmitter implements FS {
    public submit(form: Form, values: any): Promise<any> {
        console.log({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values
        });
        return axios({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values
        });
    }

}
