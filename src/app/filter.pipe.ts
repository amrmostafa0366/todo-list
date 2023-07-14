import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task/task.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], filterBy: string) {
    if (!tasks)
      return null;

    let filrered: Task[] = [];
    if (filterBy === 'Done') {
      tasks.forEach(task => {
        if (task.isDone) {
          filrered.push(task);
        }
      });
    }
    else if (filterBy === 'Not yet') {
      tasks.forEach(task => {
        if (!task.isDone) {
          filrered.push(task);
        }
      });
    }
    else {
      return tasks;
    }
    return filrered;
  }

}
