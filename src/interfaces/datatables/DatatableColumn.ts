export default interface DatatableColumn {
  /**
   * Возвращает название колонки.
   * Это название совпадает с полем в JSON-объекте ресурса.
   *
   * @return {string}
   */
  getName(): string;

  /**
   * Возвращает название поля из JSON-объекта.
   * Значение из этого поля будет отображено в соотв. колонке таблицы.
   *
   * @return {string}
   */
  getFieldName(): string;
}
