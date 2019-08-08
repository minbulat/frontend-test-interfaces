import Form from './Form';

export default interface FormSubmitter {
  /**
   * Выполняет отправку указанной формы с указанными значениями.
   *
   * @param {Form} form
   * @param {any[]} values
   *
   * @return {Promise<any>}
   */
  submit(form: Form, values: any[]): Promise<any>;
}
