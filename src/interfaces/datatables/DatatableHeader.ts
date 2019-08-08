export default interface DatatableHeader {
  /**
   * Возвращает название заголовка.
   * Это название совпадает с полем в JSON-объекте ресурса.
   *
   * @return {string}
   */
  getName(): string;

  /**
   * Возвращает название заголовка.
   * Это значение будет отображено в самой таблице (th).
   *
   * @return {string}
   */
  getLabel(): string;
}
