import { Component, Input } from '@angular/core';
import { Todo } from 'src/classes/Todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input('todo') todos!: Todo[];
  @Input('filterBy') filterBy!: string;

    clickCheck(todo: Todo) {
      todo.isDone = !todo.isDone;
    }
  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  edit(todo: Todo) {
    todo.editable = true;
  }

  save(todo: Todo, newTitle: string) {
    if (!this.isEmpty(newTitle)) {
      todo.title = newTitle;
      todo.editable = false
    }
  }

  isEmpty(value: string): boolean {
    if (value.match(/^ *$/)) {
      return true;
    }
    return false;
  }

}
