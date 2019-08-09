import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {NumberField} from '@/fields/NumberField';
import {BooleanField} from '@/fields/BooleanField';
// import FormSubmitter from '@/abstracts/FormSubmitter';
import {CreateForm} from "@/abstracts/CreateForm";

export class CreateNewsForm extends CreateForm {
    protected url = 'https://crudpi.io/d39f7c/news';
    protected method = 'POST';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author', 'Автор'),
        new NumberField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    protected values: any;

    // public saveVales(values: any[]): Promise<any> {
    //     return new FormSubmitter().submit(this, values); // TODO values
    //
    // }
}
