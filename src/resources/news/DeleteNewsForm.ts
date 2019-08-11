import FormField from '@/interfaces/forms/FormField';
import {Method} from "axios";
import {DeleteForm} from "@/abstracts/DeleteForm";

export default class DeleteNewsForm extends DeleteForm {
    public url = 'https://crudpi.io/d39f7c/news/';
    public method: Method = 'DELETE';
    public fields: FormField[] = [];
    public values: any;
}
