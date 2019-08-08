import FormField from '@/interfaces/forms/FormField';
import SF from '@/views/fields/StringField';

export class StringField implements FormField {
    label: string;
    name: string;

    constructor(name: string, label: string) {
        this.label = label;
        this.name = name;
    }

    getComponent(): any {
        return SF;
    }

    getLabel(): string {
        return this.label;
    }

    getName(): string {
        return this.name;
    }

}
