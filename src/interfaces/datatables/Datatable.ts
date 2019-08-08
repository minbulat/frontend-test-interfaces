import DatatableHeader from './DatatableHeader';
import DatatableColumn from './DatatableColumn';

export default interface Datatable {
  /**
   * Возвращает URL API, по которому должна выполняться загрузка данных.
   *
   * @return {string}
   */
  getApiUrl(): string;

  /**
   * Возвращает список заголовков таблицы.
   *
   * @return {DatatableHeader[]}
   */
  getHeaders(): DatatableHeader[];

  /**
   * Возвращает список колонок таблицы.
   *
   * @return {DatatableColumn[]}
   */
  getColumns(): DatatableColumn[];
}
