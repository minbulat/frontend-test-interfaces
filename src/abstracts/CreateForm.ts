import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import FormSubmitter from './FormSubmitter';

export abstract class CreateForm extends AbstractForm {
    public saveVales(values: any[]): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values
    }
}
