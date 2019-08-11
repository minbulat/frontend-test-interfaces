import {AbstractForm} from './AbstractForm';

export abstract class Table extends AbstractForm {

    public fetchValues(): Promise<any> {
        return this.axios.request({
            method: this.getMethod(),
            url: this.getUrl(),
        })
            .then((response) => response.data);
    }
}
