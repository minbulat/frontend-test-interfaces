import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';

export abstract class Table extends AbstractForm {
    public fetchVales(): Promise<any> {
        return new FormSubmitter().submit(this, []);

    }
}
