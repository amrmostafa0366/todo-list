import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  inputValue: string = '';

  @Output('todo') eventEmitter = new EventEmitter();

  addEmit(todo: string) {
    if (!this.isEmpty(todo)) {
      this.eventEmitter.emit(todo);
      this.inputValue = ''
    }
  }

  isEmpty(value: string): boolean {
    if (value.match(/^ *$/)) {
      return true;
    }
    return false;
  }
}
