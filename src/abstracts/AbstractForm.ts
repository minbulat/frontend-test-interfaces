import Form from '@/interfaces/forms/Form';
import FormField from '@/interfaces/forms/FormField';
import axios, {Method} from "axios";



export abstract class AbstractForm implements Form {
    // public axios: (config: any) => Promise<{ data: any }>;

    public axios: { request: (config: any) => Promise<any> };
    public abstract fields: FormField[];
    public abstract method: Method;
    public abstract url: string;
    public abstract values: any;

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
