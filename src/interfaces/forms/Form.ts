import FormField from './FormField';
import {Method} from 'axios';

export default interface Form {
  /**
   * Возвращает HTTP-метод, с которым должна быть отправлена форма.
   *
   * @return {string}
   */
  getMethod(): Method;

  /**
   * Возвращает URL, на который должна быть отправлена форма.
   *
   * @return {string}
   */
  getUrl(): string;

  /**
   * Возвращает список полей формы.
   *
   * @return {FormField[]}
   */
  getFields(): FormField[];

  /**
   * Возвращает список значений полей формы по умолчанию (обычный объект).
   *
   * @return {object}
   */
  getValues(): any;
}
