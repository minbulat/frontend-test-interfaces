import FormField from '@/interfaces/forms/FormField';
import {StringField} from "@/fields/StringField";
import {BooleanField} from "@/fields/BooleanField";
import {NumberField} from "@/fields/NumberField";
import {EditForm} from "@/abstracts/EditForm";
import {Method} from "axios";
import {DeleteForm} from "@/abstracts/DeleteForm";

export default class DeleteProductForm extends DeleteForm {
    public url = 'https://crudpi.io/d39f7c/products/';
    public method: Method = 'DELETE';
    public fields: FormField[] = [];
    public values: any;
}
