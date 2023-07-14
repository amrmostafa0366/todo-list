import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title = '';
  tasks: Task[] = [];
  filterBy = '';

  addTask() {
    if (!this.title.match(/^ *$/)) {
      this.tasks.push(new Task(this.title));
    }
    this.title = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number) {
    if (!this.isEmpty(this.title)) {
      let task = this.tasks.at(index);
      if (task?.title) {
        task.title = this.title;
      }
    }
    this.title = '';
  }
  changeFilter(event: any) {
    this.filterBy = event.target.value;
  }

  isEmpty(value: string): boolean {
    if (value.match(/^ *$/)) {
      return true;
    }
    return false;
  }
}

export class Task {
  title: string = '';
  isDone: boolean = false;
  creationDate: Date;
  constructor(title?: string) {
    title ? this.title = title : '';
    this.creationDate = new Date();
  }
  clickcCheck() {
    this.isDone = !this.isDone;
  }
}
