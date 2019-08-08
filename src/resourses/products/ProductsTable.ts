import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {FormSubmitter} from './FormSubmitter';

export class ProductsTable extends AbstractForm {
    protected url = 'https://crudpi.io/d39f7c/products';
    protected method = 'GET';
    protected fields: FormField[] = [
        new NumberField('id', 'ИД'),
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

    public fetchVales(): Promise<any> {
        return new FormSubmitter().submit(this, []);

    }
}
