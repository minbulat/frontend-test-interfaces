import Form from '@/interfaces/forms/Form';
import FormField from '@/interfaces/forms/FormField';
import {Method} from "axios";



export abstract class AbstractForm implements Form {
    protected abstract fields: FormField[];
    protected abstract method: Method;
    protected abstract url: string;
    protected abstract values: any;

    public getFields(): FormField[] {
        return this.fields;
    }

    public getMethod(): Method {

        return this.method;
    }

    public getUrl(): string {
        return this.url;
    }

    public getValues(): any {
        return this.values;
    }

}
