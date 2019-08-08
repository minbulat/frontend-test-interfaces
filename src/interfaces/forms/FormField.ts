export default interface FormField {
  /**
   * Возвращает название поля.
   * Это значение будет использовано при отправке формы.
   *
   * @return {string}
   */
  getName(): string;

  /**
   * Возвращает лейбл поля.
   * Это значение будет отображено в самой форме.
   *
   * @return {string}
   */
  getLabel(): string;

  /**
   * Возвращает название Vue-компонента (если он зарегистрирован глобально) или его инстанс.
   *
   * @return {any}
   */
  getComponent(): any;
}
