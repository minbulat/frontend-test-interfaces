import FS from '@/interfaces/forms/FormSubmitter';
import Form from '@/interfaces/forms/Form';

const axios = require('axios');

export class FormSubmitter implements FS {
    public submit(form: Form, values: any[]): Promise<any> {
        return axios({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values, // TODO Выяснить про значения
        });
    }

}
