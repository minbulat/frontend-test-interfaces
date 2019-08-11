import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from '@/abstracts/Table';
import {Method} from 'axios';

export default class <%= name %>Table extends Table {
    public url = 'https://crudpi.io/d39f7c/products';
    public method: Method = 'GET';
    public fields: FormField[] = [
        new NumberField('id', 'ИД'),
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    public values: any;
}
