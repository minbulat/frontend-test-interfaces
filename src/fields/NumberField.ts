import FormField from "@/interfaces/forms/FormField";
import NF from "@/views/fields/NumberField";

export class NumberField implements FormField {
    public label: string;
    public name: string;

    constructor(name: string, label: string) {
        this.label = label;
        this.name = name;
    }

    public getComponent(): any {
        return NF;
    }

    public getLabel(): string {
        return this.label;
    }

    public getName(): string {
        return this.name;
    }

}
