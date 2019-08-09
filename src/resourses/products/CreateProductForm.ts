import {AbstractForm} from '../../abstracts/AbstractForm';
import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {ProductsFormSubmitter} from './ProductsFormSubmitter';
import {CreateForm} from "@/abstracts/CreateForm";

export class CreateProductForm extends CreateForm {
    protected url = 'https://crudpi.io/d39f7c/products';
    protected method = 'POST';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

    public saveVales(values: any[]): Promise<any> {
        return new ProductsFormSubmitter().submit(this, values); // TODO values

    }
}
