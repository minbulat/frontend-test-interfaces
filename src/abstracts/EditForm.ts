import {AbstractForm} from './AbstractForm';
import FormSubmitter from "./FormSubmitter";

export abstract class EditForm extends AbstractForm {
    public saveVales(values: any[]): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values

    }
}