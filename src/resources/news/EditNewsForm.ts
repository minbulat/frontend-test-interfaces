import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";
import {DateField} from "@/fields/DateField";

export default class EditNewsForm extends EditForm {
    public dataFetchMethod: Method = 'GET';
    public dataFetchUrl: string = 'https://crudpi.io/d39f7c/news/';
    // protected id: Number;
    public url = 'https://crudpi.io/d39f7c/news/';
    public method: Method = 'PUT';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new DateField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    public values: any;

}
