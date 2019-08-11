import FormField from '@/interfaces/forms/FormField';
import {StringField} from '@/fields/StringField';
import {BooleanField} from '@/fields/BooleanField';
import {Table} from "@/abstracts/Table";
import {Method} from "axios";
import {DateField} from "@/fields/DateField";
import {NumberField} from "@/fields/NumberField";

export default class NewsTable extends Table {
    public url = 'https://crudpi.io/d39f7c/news';
    public method: Method = 'GET';
    public fields: FormField[] = [
        new NumberField('id', 'ИД'),
        new StringField('name', 'Название'),
        new StringField('text', 'Текст'),
        new StringField('author.name', 'Имя автора'),
        new StringField('author.work.title', 'Место работы автора'),
        new DateField('date', 'Дата'),
        new BooleanField('isPublic', 'Опубликовано'),
    ];
    public values: any;

    public fetchValues(): Promise<any> {
        return super.fetchValues().then((data) =>
            data.map((row: any) => {
                    // return row;
                    const r = row;
                    if (r.date) {
                        r.date = new Date(row.date);
                        return r;
                    } else { return r; }
                },
            ),
        );
    }
}
