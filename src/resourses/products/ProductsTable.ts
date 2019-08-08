import {AbstractForm} from "./AbstractForm";
import FormField from "@/interfaces/forms/FormField";
import {StringField} from "@/fields/StringField";
import {NumberField} from "@/fields/NumberField";
import {BooleanField} from "@/fields/BooleanField";

export class ProductsTable extends AbstractForm {
    url = 'https://crudpi.io/d39f7c/products';
    method = 'GET';
    fields: FormField[] = [
        new NumberField("id", "ИД"),
        new StringField("name", "Название"),
        new StringField("description", "Описание"),
        new NumberField("price", "Цена"),
        new BooleanField("isActual", "Актуальность"),
    ];
    values: any;
}
