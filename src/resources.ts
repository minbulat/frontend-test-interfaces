import FormSubmitter from '@/abstracts/FormSubmitter';
import {CreateForm} from '@/abstracts/CreateForm';
import {EditForm} from '@/abstracts/EditForm';
import {Table} from '@/abstracts/Table';

import CreateProductForm from '@/resources/products/CreateProductForm';
import EditProductForm from '@/resources/products/EditProductForm';
import DeleteProductForm from '@/resources/products/DeleteProductForm';
import ProductsFormSubmitter from '@/resources/products/ProductsFormSubmitter';
import ProductsTable from '@/resources/products/ProductsTable';

import CreateNewsForm from '@/resources/news/CreateNewsForm';
import EditNewsForm from '@/resources/news/EditNewsForm';
import NewsTable from '@/resources/news/NewsTable';
import NewsFormSubmitter from '@/resources/news/NewsFormSubmitter';
import {DeleteForm} from "@/abstracts/DeleteForm";
import DeleteNewsForm from "@/resources/news/DeleteNewsForm";

// importInjectZone - Do not delete!

interface resource {
    name: string;
    forms: {
        create: CreateForm,
        edit: EditForm,
        delete: DeleteForm,
        table: Table,
        submitter: FormSubmitter,
    };
}

const resources: resource[] = [
    {
        name: 'products',
        forms: {
            create: new CreateProductForm(),
            edit: new EditProductForm(),
            delete: new DeleteProductForm(),
            submitter: new ProductsFormSubmitter(),
            table: new ProductsTable(),
        },
    },
    {
        name: 'news',
        forms: {
            create: new CreateNewsForm(),
            edit: new EditNewsForm(),
            delete: new DeleteNewsForm(),
            submitter: new NewsFormSubmitter(),
            table: new NewsTable(),
        },
    },
    // resourceInjectZone - Do not delete!
];

export default resources;
