import Form from '@/interfaces/forms/Form';
import FormField from '@/interfaces/forms/FormField';

export abstract class AbstractForm implements Form {
    protected abstract fields: FormField[];
    protected abstract method: string;
    protected abstract url: string;
    protected abstract values: any;

    public getFields(): FormField[] {
        return this.fields;
    }

    public getMethod(): string {
        return this.method;
    }

    public getUrl(): string {
        return this.url;
    }

    public getValues(): any {
        return this.values;
    }

}
