import { Component } from '@angular/core';
import { Todo } from 'src/classes/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: Todo[] = [];
  filterBy: string = 'All';
  searchBy: string = '';
  changeFilter(event: any) {
    this.filterBy = event.target.value;
  }
  addTodo(todo: string) {
    this.todos.push(new Todo(todo));
  }
}
