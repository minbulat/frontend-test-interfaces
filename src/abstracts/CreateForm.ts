import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';

export abstract class CreateForm extends AbstractForm {
    public saveValues(values: any): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values
    }
}
