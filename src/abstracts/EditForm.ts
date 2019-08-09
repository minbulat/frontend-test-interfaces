import {AbstractForm} from './AbstractForm';
import FormSubmitter from "./FormSubmitter";

// TODO Исправить
// tslint:disable-next-line:no-var-requires
const axios = require('axios');

export abstract class EditForm extends AbstractForm {
    abstract dataFetchMethod: string;
    abstract dataFetchUrl: string;

    public getDataFetchMethod(): string {
        return this.dataFetchMethod;
    };

    public getDataFetchUrl(): string {
        return this.dataFetchUrl;
    };

    public fetchVales(): Promise<any> {
        const ax = axios({
            method: this.getDataFetchMethod(),
            url: this.getDataFetchUrl(),
        });

        return ax;

    }

    public saveVales(values: any[]): Promise<any> {
        return new FormSubmitter().submit(this, values); // TODO values

    }
}
