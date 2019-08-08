import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {FormSubmitter} from './FormSubmitter';

export class CreateProductForm extends AbstractForm {
    protected url = 'https://crudpi.io/d39f7c/products';
    protected method = 'POST';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new StringField('price', 'Цена'),
        new StringField('isActual', 'Актуальность'),
    ];
    protected values: any;

    public saveVales(): Promise<any> {
        return new FormSubmitter().submit(this, []);

    }
}
