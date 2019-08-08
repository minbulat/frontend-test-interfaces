import Form from "@/interfaces/forms/Form";
import FormField from "@/interfaces/forms/FormField";

export abstract class AbstractForm implements Form {
    abstract fields: FormField[];
    abstract method: string;
    abstract url: string;
    abstract values: any;

    getFields(): FormField[] {
        return this.fields;
    }

    getMethod(): string {
        return this.method;
    }

    getUrl(): string {
        return this.url;
    }

    getValues(): any {
    return this.values;
    }

}
