import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {FormSubmitter} from "@/resourses/products/FormSubmitter";

export class EditProductForm extends AbstractForm {
    protected id: Number;
    protected url = 'https://crudpi.io/d39f7c/products/';
    protected method = 'PUT';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

    constructor(id: Number) {
        super();
        this.id = id;
    };

    getUrl(): string {
        return this.url + this.id
    }

    public saveVales(values: any[]): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values

    }
}