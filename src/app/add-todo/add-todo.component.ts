import { Todo } from 'src/classes/Todo';
import { Component, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoValidators } from './todo.validators';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnChanges  {

  @Output('todo') eventEmitter = new EventEmitter();

  @Input('todos') todos: Todo[] = [];

  form = new FormGroup({
    todo: new FormControl('',
      [
        // Validators.required,
      ],
      // TodoValidators.shouldBeUnique,
     // TodoValidators.shouldBeUniqueInList(this.todos),

    ),
  });

  get todo() {
    return this.form.get(['todo'])
  }
  set todo(value: any) {
    this.todo.setValue(value)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['todos']) {
      this.todo?.setAsyncValidators(TodoValidators.shouldBeUniqueInList(this.todos));
    }
  }

  addEmit(todo: string) {
    if (!this.isEmpty(todo)) {
      this.eventEmitter.emit(todo);
      this.form.reset();
    }
  }
  isEmpty(value: string): boolean {
    if (value.match(/^ *$/)) {
      return true;
    }
    return false;
  }
}
