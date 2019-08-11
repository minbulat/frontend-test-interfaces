import Form from '@/interfaces/forms/Form';
import FormField from '@/interfaces/forms/FormField';
import axios, {Method} from "axios";



export abstract class AbstractForm implements Form {
    public axios: { request: (config: any) => Promise<any> };
    protected abstract fields: FormField[];
    protected abstract method: Method;
    protected abstract url: string;
    protected abstract values: any;

    constructor() {
        this.axios = axios;
    }

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
