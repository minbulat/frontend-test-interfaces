import FormField from "@/interfaces/forms/FormField";
import BF from "@/components/fields/BooleanField";

export class BooleanField implements FormField {
    public label: string;
    public name: string;

    constructor(name: string, label: string) {
        this.label = label;
        this.name = name;
    }

    public getComponent(): any {
        return BF;
    }

    public getLabel(): string {
        return this.label;
    }

    public getName(): string {
        return this.name;
    }

    public valueToStr(value: any): string {
        return typeof value === "boolean" ? value ? 'Да' : 'Нет' : '';
    }

}
