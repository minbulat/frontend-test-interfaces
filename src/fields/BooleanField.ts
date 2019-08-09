import FormField from "@/interfaces/forms/FormField";
import BF from "@/views/fields/BooleanField";

export class BooleanField implements FormField {
    label: string;
    name: string;

    constructor(name: string, label: string,) {
        this.label = label;
        this.name = name;
    }

    getComponent(): any {
        return BF;
    }

    getLabel(): string {
        return this.label
    }

    getName(): string {
        return this.name;
    }

}