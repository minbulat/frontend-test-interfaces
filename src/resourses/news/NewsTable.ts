import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from "@/abstracts/Table";

export class NewsTable extends Table {
    protected url = 'https://crudpi.io/d39f7c/news';
    protected method = 'GET';
    protected fields: FormField[] = [
        new NumberField('id', 'ИД'),
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

}
