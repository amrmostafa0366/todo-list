import { Todo } from 'src/classes/Todo';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  inputValue: string = '';

  @Output('todo') eventEmitter = new EventEmitter();


  // form = new FormGroup({
  //   todo: new FormControl('', Validators.required),
  // });

  // get todo() {
  //   return this.form.get(['todo'])
  // }
  // set todo(value:any){
  //    this.todo.setValue(value)
  // }

  addEmit(todo: string) {
    if (!this.isEmpty(todo)) {
      this.eventEmitter.emit(todo);
      this.inputValue='';
    }
  }

  isEmpty(value: string): boolean {
    if (value.match(/^ *$/)) {
      return true;
    }
    return false;
  }
}
