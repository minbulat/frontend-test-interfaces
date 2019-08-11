import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
// import FormSubmitter from '@/abstracts/FormSubmitter';
import {CreateForm} from "@/abstracts/CreateForm";
import {Method} from "axios";

export default class CreateNewsForm extends CreateForm {
    public url = 'https://crudpi.io/d39f7c/news';
    public method: Method = 'POST';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    public values: any;

    // public saveVales(values: any[]): Promise<any> {
    //     return new FormSubmitter().submit(this, values); // TODO values
    //
    // }
}
