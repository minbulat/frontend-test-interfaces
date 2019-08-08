import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';

class EditProductForm extends AbstractForm {
    protected url = 'https://crudpi.io/d39f7c/products/:id';
    protected method = 'UPDATE';
    protected fields: FormField[] = [];
    protected values: any;
}
