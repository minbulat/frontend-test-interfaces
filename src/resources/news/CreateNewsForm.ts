import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {BooleanField} from '@/fields/BooleanField';
import {DateField} from '@/fields/DateField';
import {CreateForm} from '@/abstracts/CreateForm';
import {Method} from 'axios';

export default class CreateNewsForm extends CreateForm {
    public url = 'https://crudpi.io/d39f7c/news';
    public method: Method = 'POST';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author.name', 'Имя автора'),
        new StringField('author.work.title', 'Место работы автора'),
        new DateField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];

    public values: any = {
        'name': 'Название по-умолчаню',
        'date': new Date(),
        'isPublic': true,
    };

    // public saveVales(values: any[]): Promise<any> {
    //     return new FormSubmitter().submit(this, values);
    // TODO values
    //
    // }
}
