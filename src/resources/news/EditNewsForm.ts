import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";

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
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    public values: any;

}
