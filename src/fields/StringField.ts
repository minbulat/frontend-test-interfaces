import FormField from '@/interfaces/forms/FormField';
import SF from '@/views/fields/StringField';

export class StringField implements FormField {
    public label: string;
    public name: string;

    constructor(name: string, label: string) {
        this.label = label;
        this.name = name;
    }

    public getComponent(): any {
        return SF;
    }

    public getLabel(): string {
        return this.label;
    }

    public getName(): string {
        return this.name;
    }

}
