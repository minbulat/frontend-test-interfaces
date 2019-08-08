import {AbstractForm} from "./AbstractForm";
import FormField from "@/interfaces/forms/FormField";

class ProductsTable extends AbstractForm {
    url = 'https://crudpi.io/d39f7c/products';
    method = 'GET';
    fields: FormField[] = [];
    values: any;
}
