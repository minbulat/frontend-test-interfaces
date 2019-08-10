import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {ProductsFormSubmitter} from "@/resourses/products/ProductsFormSubmitter";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";

export class EditProductForm extends EditForm {


    public dataFetchMethod: Method = 'GET';
    public dataFetchUrl: string = 'https://crudpi.io/d39f7c/products/';
    protected id: number;
    protected url = 'https://crudpi.io/d39f7c/products/';
    protected method = 'PUT' as Method;
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;

    // TODO Убрать id
    constructor(id: number = 0) {
        super();
        this.id = id;
    }

    public getUrl(): string {
        return this.url + this.id;
    }

    public saveVales(values: any[]): Promise<any> {
        return new ProductsFormSubmitter().submit(this, values); // TODO values

    }

    public getDataFetchUrl(): string {
        return this.dataFetchUrl + this.id;
    }
}
