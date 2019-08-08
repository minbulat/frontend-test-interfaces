import FormField from "@/interfaces/forms/FormField";
import {StringField} from "@/fields/StringField";

export class NameField extends StringField{
    label: string = "name";
    name: string = "Название";

    getComponent(): any {
    }

    getLabel(): string {
        return this.label
    }

    getName(): string {
        return this.name;
    }

}