import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import ProductsFormSubmitter from './ProductsFormSubmitter';
import {CreateForm} from "@/abstracts/CreateForm";
import {Method} from "axios";

export default class CreateProductForm extends CreateForm {
    public url = 'https://crudpi.io/d39f7c/products';
    public method: Method = 'POST';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    public values: any;

    public saveVales(values: any[]): Promise<any> {
        return new ProductsFormSubmitter().submit(this, values); // TODO values

    }
}
