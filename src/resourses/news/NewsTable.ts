import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from "@/abstracts/Table";
import {Method} from "axios";

export class NewsTable extends Table {
    protected url = 'https://crudpi.io/d39f7c/news';
    protected method: Method = 'GET';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    protected values: any;

}
