import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from "@/abstracts/Table";
import {Method} from "axios";

export class ProductsTable extends Table {
    protected url = 'https://crudpi.io/d39f7c/products';
    protected method: Method = 'GET';
    protected fields: FormField[] = [
        new NumberField('id', 'ИД'),
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

    // public fetchVales(): Promise<any> {
    //     return new ProductsFormSubmitter().submit(this, []);
    //
    // }
}
