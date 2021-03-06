import FormField from "@/interfaces/forms/FormField";
import NF from "@/components/fields/NumberField";

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

    public valueToStr(value: any): string {
        return value || value === 0 ? typeof value === "number" ? value.toString() : "invalid value" : "";
    }
}
