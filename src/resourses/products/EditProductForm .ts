import {AbstractForm} from "./AbstractForm";
import FormField from "@/interfaces/forms/FormField";

class EditProductForm extends AbstractForm {
    url = 'https://crudpi.io/d39f7c/products/:id';
    method = 'UPDATE';
    fields: FormField[] = [];
    values: any;
}
