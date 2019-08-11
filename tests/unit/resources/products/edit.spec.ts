import EditProductForm from '@/resources/products/EditProductForm';

describe('ProductsEdit', () => {
    it('setId сохраняет значения в id', () => {
        const epf = new EditProductForm();
        const value = 5;
        epf.setId(value);
        expect(epf.id).toEqual(value);
    });
    it('getMethod возвращает значение PUT', () => {
        const epf = new EditProductForm();
        expect(epf.getMethod()).toEqual('PUT');
    });
    it('getDataFetchMethod возвращает значение GET', () => {
        const epf = new EditProductForm();
        expect(epf.getDataFetchMethod()).toEqual(epf.dataFetchMethod);
    });
    it('fetchValues сохраняет значения в values', async () => {
        const epf = new EditProductForm();
        const values = {id: 4, name: 'name'};
        epf.axios.request = () => Promise.resolve({data: values});
        await epf.fetchValues();
        expect(epf.values).toEqual(values);
    });
    // TODO Возвращает  values
    // it('fetchValues сохраняет значения в values', async () => {
    //     const epf = new EditProductForm();
    //     const values = {id: 4, name: 'name'};
    //     epf.axios.request = () => Promise.resolve({data: values});
    //     await epf.fetchValues();
    //     expect(epf.values).toEqual(values);
    // });
});
