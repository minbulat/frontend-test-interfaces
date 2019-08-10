import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";

export class EditNewsForm extends EditForm {
    public dataFetchMethod: Method = 'GET';
    public dataFetchUrl: string = 'https://crudpi.io/d39f7c/news/';
    // protected id: Number;
    protected url = 'https://crudpi.io/d39f7c/news/';
    protected method: Method = 'PUT';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    protected values: any;

}
