import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {ProductsFormSubmitter} from "@/resourses/products/ProductsFormSubmitter";
import {EditForm} from "@/abstracts/EditForm";

export class EditProductForm extends EditForm {
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

    constructor(id: Number = 0) {
        super();
        this.id = id;
    };

    getUrl(): string {
        return this.url + this.id
    }

    public saveVales(values: any[]): Promise<any> {
        return new ProductsFormSubmitter().submit(this, values); // TODO values

    }
}