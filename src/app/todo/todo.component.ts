import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/classes/Todo';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private dialogRef: MatDialog) {

  }
  @Input('todo') todos!: Todo[];
  @Input('filterBy') filterBy!: string;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  clickCheck(todo: Todo) {
    todo.isDone = !todo.isDone;
  }
  openDialog(todos: any, todo: any) {
    this.dialogRef.open(PopUpComponent, {
      data: {
        list: todos,
        item: todo
      }
    });
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
import { MatPaginator } from '@angular/material/paginator';
/* amr's note
inputfield ,, -> output -> taken by parent component,, then parent component use it with another child component , anf this child comp will recieve it as an inpnut
*/