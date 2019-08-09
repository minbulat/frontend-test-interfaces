import FormField from "@/interfaces/forms/FormField";
import NF from "@/views/fields/NumberField";

export class NumberField implements FormField {
    label: string;
    name: string;

    constructor(name: string, label: string,) {
        this.label = label;
        this.name = name;
    }

    getComponent(): any {
        return NF;
    }

    getLabel(): string {
        return this.label
    }

    getName(): string {
        return this.name;
    }

}