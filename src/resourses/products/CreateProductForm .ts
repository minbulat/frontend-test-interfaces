import {AbstractForm} from './AbstractForm';
import FormField from '@/interfaces/forms/FormField';

class CreateProductForm extends AbstractForm {
    protected url = 'https://crudpi.io/d39f7c/products';
    protected method = 'POST';
    protected fields: FormField[] = [];
    protected values: any;
}
