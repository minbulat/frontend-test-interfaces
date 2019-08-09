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

## Создание нового ресурса
1. Создать файлы:
   * `/resources/{ResourceName}/AbstractForm`
   * `/resources/{ResourceName}/CreateProductForm`
   * `/resources/{ResourceName}/EditProductForm`
   * `/resources/{ResourceName}/FormSubmitter`
   * `/resources/{ResourceName}/ProductsTable`
2. Добавить в файл `resources.ts` экземпляры созданных классов и обозначение в пути.

