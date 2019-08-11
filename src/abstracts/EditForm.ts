import {AbstractForm} from './AbstractForm';
import FormSubmitter from "./FormSubmitter";
import axios, {Method} from 'axios';

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

    public fetchVales(): Promise<any> {
        return axios.request({
            method: this.getDataFetchMethod(),
            url: this.getDataFetchUrl(),
        }).then((response) => {
            this.values = response.data;
            return this.values;
        });
    }

    public saveValues(values: any): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values

    }
}
