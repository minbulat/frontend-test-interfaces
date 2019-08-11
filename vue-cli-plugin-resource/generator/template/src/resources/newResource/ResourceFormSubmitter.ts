import Form from '@/interfaces/forms/Form';
import FormSubmitter from "@/abstracts/FormSubmitter";
import axios from 'axios';

export default class <%= name %>FormSubmitter extends FormSubmitter {
    public submit(form: Form, values: any): Promise<any> {
        return axios.request({
            method: form.getMethod(),
            url: form.getUrl(),
            data: values,
        });
    }

}
