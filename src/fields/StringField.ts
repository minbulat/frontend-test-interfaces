import FormField from "@/interfaces/forms/FormField";

export class StringField implements FormField {
    label: string;
    name: string;

    constructor(name: string, label: string,) {
        this.label = label;
        this.name = name;
    }

    getComponent(): any {
    }

    getLabel(): string {
        return this.label
    }

    getName(): string {
        return this.name;
    }

}