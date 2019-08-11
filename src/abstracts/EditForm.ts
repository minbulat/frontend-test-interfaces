import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';
import {Method} from 'axios';

export abstract class EditForm extends AbstractForm {
    public abstract dataFetchMethod: Method;
    public abstract dataFetchUrl: string;
    public id: number | null = null;

    public setId(id: number): void {
        this.id = id;
    }

    public getDataFetchMethod(): Method {
        return this.dataFetchMethod;
    }

    public getDataFetchUrl(): string {
        return this.dataFetchUrl + this.id;
    }

    public getUrl(): string {
        return this.url + this.id;
    }

    public fetchValues(): Promise<any> {
        const dot = require('dot-object');
        return this.axios.request({
            method: this.getDataFetchMethod(),
            url: this.getDataFetchUrl(),
        }).then((response) => {
            this.values = dot.dot(response.data);
            return this.values;
        });
    }

    public saveValues(submitter: FormSubmitter, values: any): Promise<any> {
        return submitter.submit(this, values);

    }
}
