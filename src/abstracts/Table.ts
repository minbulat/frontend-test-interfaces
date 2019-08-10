import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';
import Form from "@/interfaces/forms/Form";
import axios from "axios";

export abstract class Table extends AbstractForm {
    public fetchVales(): Promise<any> {
        return axios.request({
            method: this.getMethod(),
            url: this.getUrl(),
        }).then((response) => response.data);
    }
}
