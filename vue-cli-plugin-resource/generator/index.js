const fs = require('fs');
module.exports = (api, options) => {
    if (options.name) {
        const nameLower = options.name[0].toLowerCase() + options.name.slice(1);
        const nameUpper = options.name[0].toUpperCase() + options.name.slice(1);

        if (!fs.readdirSync('src/resources').includes(nameLower)) {
            api.render('./template', {name: nameLower, nameUpper});
            api.onCreateComplete(() => {
                fs.renameSync('src/resources/newResource', 'src/resources/' + nameLower);
                const oldNewNames = [
                    {old: 'CreateResourceForm', new: `Create${nameUpper}Form`},
                    {old: 'EditResourceForm', new: `Edit${nameUpper}Form`},
                    {old: 'DeleteResourceForm', new: `Delete${nameUpper}Form`},
                    {old: 'ResourceFormSubmitter', new: `${nameUpper}FormSubmitter`},
                    {old: 'ResourceTable', new: `${nameUpper}Table`}];
                oldNewNames.forEach(names =>
                    fs.renameSync(`src/resources/${nameLower}/${names.old}.ts`, `src/resources/${nameLower}/${names.new}.ts`)
                );

                const contentResources = fs.readFileSync('src/resources.ts', {encoding: 'utf-8'});
                const resourceZone = '// resourceInjectZone';
                const importZone = '// importInjectZone';
                const resource = `{
        name: '${nameLower}',
        forms: {
            create: new Create${nameUpper}Form(),
            edit: new Edit${nameUpper}Form(),
            delete: new Delete${nameUpper}Form(),
            submitter: new ${nameUpper}FormSubmitter(),
            table: new ${nameUpper}Table(),
        },
    },\n    `;
                const imports = [`import Create${nameUpper}Form from "@/resources/${nameLower}/Create${nameUpper}Form";`,
                    `import Edit${nameUpper}Form from "@/resources/${nameLower}/Edit${nameUpper}Form";`,
                    `import Delete${nameUpper}Form from "@/resources/${nameLower}/Delete${nameUpper}Form";`,
                    `import ${nameUpper}Table from "@/resources/${nameLower}/${nameUpper}Table";`,
                    `import ${nameUpper}FormSubmitter from '@/resources/${nameLower}/${nameUpper}FormSubmitter';`,].join('\n') + '\n\n';


                let newContentResources = contentResources.toString().replace(resourceZone, resource + resourceZone);
                newContentResources = newContentResources.toString().replace(importZone, imports + importZone);
                fs.writeFileSync('src/resources.ts', newContentResources, {encoding: 'utf-8'});

            })
        } else {
            console.error('Ошибка: Папка уже существует')
            // TODO else
        }
    } else {
        console.error('Ошибка: Введите название')
        // TODO else
    }


}
;
