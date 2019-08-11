import FormSubmitter from "@/abstracts/FormSubmitter";
import {CreateForm} from "@/abstracts/CreateForm";
import {EditForm} from "@/abstracts/EditForm";
import {Table} from "@/abstracts/Table";

import CreateProductForm from "@/resources/products/CreateProductForm";
import EditProductForm from "@/resources/products/EditProductForm";
import ProductsFormSubmitter from "@/resources/products/ProductsFormSubmitter";
import ProductsTable from "@/resources/products/ProductsTable";

import CreateNewsForm from "@/resources/news/CreateNewsForm";
import EditNewsForm from "@/resources/news/EditNewsForm";
import NewsTable from "@/resources/news/NewsTable";
import NewsFormSubmitter from '@/resources/news/NewsFormSubmitter';

// TODO interface to type
interface IResource {
    name: string;
    forms: {
        create: CreateForm,
        edit: EditForm,
        // delete: AbstractForm,
        table: Table,
        submitter: FormSubmitter,
    };
}

const resources: IResource[] = [
    {
        name: 'products',
        forms: {
            create: new CreateProductForm(),
            edit: new EditProductForm(),
            // delete: new Delete,
            submitter: new ProductsFormSubmitter(),
            table: new ProductsTable(),
        },
    },
    {
        name: 'news',
        forms: {
            create: new CreateNewsForm(),
            edit: new EditNewsForm(),
            // delete: new Delete,
            submitter: new NewsFormSubmitter(),
            table: new NewsTable(),
        },
    },
];

export default resources;
