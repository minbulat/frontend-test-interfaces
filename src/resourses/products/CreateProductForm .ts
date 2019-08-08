import {AbstractForm} from "./AbstractForm";
import FormField from "@/interfaces/forms/FormField";

class CreateProductForm extends AbstractForm {
    url = 'https://crudpi.io/d39f7c/products';
    method = 'POST';
    fields: FormField[] = [];
    values: any;
}
