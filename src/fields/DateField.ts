import FormField from '@/interfaces/forms/FormField';
import DF from '@/components/fields/DateField';
import moment from "moment";

export class DateField implements FormField {
    public label: string;
    public name: string;

    constructor(name: string, label: string) {
        this.label = label;
        this.name = name;
    }

    public getComponent(): any {
        return DF;
    }

    public getLabel(): string {
        return this.label;
    }

    public getName(): string {
        return this.name;
    }

    public valueToStr(value: any): string {
        return  value instanceof Date  ? moment(value).format("DD.MM.YYYY") : "";
    }
}
