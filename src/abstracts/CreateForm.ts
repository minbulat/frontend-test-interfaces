import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';
import Form from "@/interfaces/forms/Form";

export abstract class CreateForm extends AbstractForm {
    public saveValues(submitter: FormSubmitter,  values: any): Promise<any> {
        return submitter.submit(this, values);
    }
}
