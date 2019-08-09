import {AbstractForm} from "@/resourses/products/AbstractForm";
import {CreateProductForm} from "@/resourses/products/CreateProductForm";
import {EditProductForm} from "@/resourses/products/EditProductForm";
import {FormSubmitter as ProductFormSubmitter} from "@/resourses/products/FormSubmitter";
import {ProductsTable} from "@/resourses/products/ProductsTable";
import FormSubmitter from "@/interfaces/forms/FormSubmitter";

interface IResource {
    name: String,
    forms: {
        create: AbstractForm,
        edit: AbstractForm,
        // delete: AbstractForm,
        table: AbstractForm,
        submitter: FormSubmitter,
    }
}

const resources: IResource[] = [
    {
        name: 'products',
        forms: {
            create: new CreateProductForm(),
            edit: new EditProductForm(),
            // delete: new Delete,
            submitter: new ProductFormSubmitter(),
            table: new ProductsTable(),
        }
    }
];

export default resources;