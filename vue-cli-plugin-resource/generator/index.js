module.exports = (api, options) => {
    if (options.name) {
        const nameLower = options.name[0].toLowerCase() + options.name.slice(1);
        const nameUpper = options.name[0].toUpperCase() + options.name.slice(1);
        api.render('./template', {name: nameLower, nameUpper})

        if (options.name) {
            api.onCreateComplete(() => {
                const fs = require('fs');
                fs.renameSync('src/resources/newResource', 'src/resources/' + nameLower);
                const oldNewNames = [
                    {old: 'CreateResourceForm', new: `Create${nameUpper}Form`},
                    {old: 'EditResourceForm', new: `Edit${nameUpper}Form`},
                    {old: 'ResourceFormSubmitter', new: `${nameUpper}FormSubmitter`},
                    {old: 'ResourceTable', new: `${nameUpper}Table`}];
                oldNewNames.forEach(names =>
                    fs.renameSync(`src/resources/${nameLower}/${names.old}.ts`, `src/resources/${nameLower}/${names.new}.ts`)
                );

                api.injectImports('src/resources.ts', [
                    `import Create${nameUpper}Form from "@/resources/news/Create${nameUpper}Form";`,
                    `import Edit${nameUpper}Form from "@/resources/news/Edit${nameUpper}Form";`,
                    `import ${nameUpper}Table from "@/resources/news/${nameUpper}Table";`,
                    `import ${nameUpper}FormSubmitter from '@/resources/news/${nameUpper}FormSubmitter';`,
                ]);

                const resource = `{
                            name: 'news',
                            forms: {
                                create: new CreateNewsForm(),
                                edit: new EditNewsForm(),
                                // delete: new Delete,
                                submitter: new NewsFormSubmitter(),
                                table: new NewsTable(),
                            },
                        },`
            })
        } else {
            console.log('Eeeee222')
        }
    } else {
        console.log('Eeeee')
    }


};
