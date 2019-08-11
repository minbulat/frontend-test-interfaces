import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from "@/abstracts/Table";
import {Method} from "axios";

export default class  NewsTable extends Table {
    public url = 'https://crudpi.io/d39f7c/news';
    public method: Method = 'GET';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    public values: any;

}
