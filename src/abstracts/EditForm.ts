import {AbstractForm} from './AbstractForm';
import FormSubmitter from "./FormSubmitter";
import axios, {Method} from 'axios';

export abstract class EditForm extends AbstractForm {
    public abstract dataFetchMethod: Method;
    public abstract dataFetchUrl: string;

    public getDataFetchMethod(): Method {
        return this.dataFetchMethod;
    }

    public getDataFetchUrl(): string {
        return this.dataFetchUrl;
    }

    public fetchVales(): Promise<any> {
        return axios.request({
            method: this.getDataFetchMethod(),
            url: this.getDataFetchUrl(),
        }).then((response) => response.data);
    }

    public saveVales(values: any[]): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values

    }
}
