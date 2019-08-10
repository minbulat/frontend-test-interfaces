import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";

export class EditProductForm extends EditForm {


    public dataFetchMethod: Method = 'GET';
    public dataFetchUrl: string = 'https://crudpi.io/d39f7c/products/';

    protected url = 'https://crudpi.io/d39f7c/products/';
    protected method: Method = 'PUT';
    protected fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    protected values: any;
}
