import {AbstractForm} from './AbstractForm';
import FormSubmitter from './FormSubmitter';
import {Method} from 'axios';

export abstract class DeleteForm extends AbstractForm {
    public id: number | null = null;

    public setId(id: number): void {
        this.id = id;
    }

    public getUrl(): string {
        return this.url + this.id;
        // TODO if this.id is null
    }

    public deleteResource(): Promise<any> {
        if (this.id) {
            return new FormSubmitter().submit(this, {});
        } else {
            return Promise.reject('Ошибка при удалении: не указан ИД');
        }
    }
}
