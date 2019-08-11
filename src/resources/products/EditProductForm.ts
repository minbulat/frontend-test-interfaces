import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";

export default class EditProductForm extends EditForm {


    public dataFetchMethod: Method = 'GET';
    public dataFetchUrl: string = 'https://crudpi.io/d39f7c/products/';

    public url = 'https://crudpi.io/d39f7c/products/';
    public method: Method = 'PUT';
    public fields: FormField[] = [
        new StringField('name', 'Название'),
        new StringField('description', 'Описание'),
        new NumberField('price', 'Цена'),
        new BooleanField('isActual', 'Актуальность'),
    ];
    public values: any;
}
