import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task/task.component';
import { Todo } from 'src/classes/Todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Todo[], filterBy: string) {
    if (!tasks)
      return null;

    if (filterBy === 'Done') {
      return tasks.filter(t => t.isDone)
    }
    else if (filterBy === 'Not yet') {
      return tasks.filter(t => !t.isDone)
    } else {
      return tasks;
    }
  }

}
