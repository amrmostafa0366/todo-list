import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Todo } from 'src/classes/Todo';

export class TodoValidators {

  static shouldBeUniqueInList(todos?: Todo[]): (control: AbstractControl) => Promise<ValidationErrors | null> {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (todos?.some(todo => todo.title === control.value)) {
            resolve({ shouldBeUniqueInList: true });
          } else {
            resolve(null);
          }
        }, 500);
      });
    };
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'amr') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 500);
    });
  };


}
