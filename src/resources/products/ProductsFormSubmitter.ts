import Form from '@/interfaces/forms/Form';
import FormSubmitter from "@/abstracts/FormSubmitter";

export default class ProductsFormSubmitter extends FormSubmitter {
    public submit(form: Form, values: any): Promise<any> {
        values.price = parseInt(values.price, 10); // TODO error
        return super.submit(form, values);
    }



}
