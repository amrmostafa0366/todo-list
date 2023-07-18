import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task/task.component';
import { Todo } from 'src/classes/Todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filterBy: string) {
    if (!todos)
      return null;

    if (filterBy === 'Done') {
      return todos.filter(t => t.isDone)
    }
    else if (filterBy === 'Not yet') {
      return todos.filter(t => !t.isDone)
    } else {
      return todos;
    }
  }

}
