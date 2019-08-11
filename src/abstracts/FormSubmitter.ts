import FS from '@/interfaces/forms/FormSubmitter';
import Form from '@/interfaces/forms/Form';
import axios from 'axios';

export default class FormSubmitter implements FS {
    public submit(form: Form, values: any): Promise<any> {
        return axios.request({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values,
        });
    }

}
