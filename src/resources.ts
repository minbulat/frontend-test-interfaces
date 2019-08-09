import FormSubmitter from "@/abstracts/FormSubmitter";
import {CreateForm} from "@/abstracts/CreateForm";
import {EditForm} from "@/abstracts/EditForm";
import {Table} from "@/abstracts/Table";

import {CreateProductForm} from "@/resourses/products/CreateProductForm";
import {EditProductForm} from "@/resourses/products/EditProductForm";
import {ProductsFormSubmitter} from "@/resourses/products/ProductsFormSubmitter";
import {ProductsTable} from "@/resourses/products/ProductsTable";

import {CreateNewsForm} from "@/resourses/news/CreateNewsForm";
import {EditNewsForm} from "@/resourses/news/EditNewsForm";
import {NewsTable} from "@/resourses/news/NewsTable";

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
            submitter: new FormSubmitter(),
            table: new NewsTable(),
        },
    },
];

export default resources;
