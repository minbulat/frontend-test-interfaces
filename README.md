# frontend-test

## Скрипты
```
npm install
npm run serve
npm run build
npm run test
npm run lint
npm run test:unit
```

## Создание нового ресурса вручную
1. Создать файлы:
   * `/resources/{ResourceName}/Create{ResourceName}Form.ts`
   * `/resources/{ResourceName}/Edit{ResourceName}Form.ts`
   * `/resources/{ResourceName}/Delete{ResourceName}Form.ts`
   * `/resources/{ResourceName}/{ResourceName}Table.ts`
   * `/resources/{ResourceName}/{ResourceName}FormSubmitter.ts`
2. Добавить в файл `resources.ts` экземпляры созданных классов и обозначение в пути.

## Создание нового ресурса автоматически
Можно создать новый ресурс с помощью генератора ресурсов через Vue-CLI.
1. Установить плагин `vue-cli-plugin-resource`, находясь в корневой папке проекта:
   ```
   npm i file:vue-cli-plugin-resource
   ```
2. Запустить плагин:
   ```
   vue invoke vue-cli-plugin-resource
   ```
3. Ввести имя нового ресурса:
   ```
   ? name: (newResource)
   ```

Имя ресурса может содержать буквы латинского алфавита, цифры и знак подчеркивания, но первый символ должен быть буквой. 
Нельзя создавать ресурсы с именами уже существующих ресурсов. 

В результате будут созданы 5 новых файлов, указанные в пункте про ручное создание ресурса, 
и внесены изменения в файл `resources.ts` 
(добавлены элементы в массив с ресурсами и импортированы указанные классы).

## Структура проекта

