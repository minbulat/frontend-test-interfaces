import Form from "@/interfaces/forms/Form";
import FormField from "@/interfaces/forms/FormField";

export class AbstractForm implements Form{
    getFields(): FormField[] {
        return [];
    }

    getMethod(): string {
        return "";
    }

    getUrl(): string {
        return "";
    }

    getValues(): any {
    }

}
