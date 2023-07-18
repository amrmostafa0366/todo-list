import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title = '';
  tasks: Task[] = [];
  filterBy = '';

  @Input('title') titl!: string;
  @Input('isDone') isDone!:boolean;
  @Input('date') creationDate!:Date;
  @Input('editable') editable!:boolean;
  
  
  checkInput(){
    console.log(this.titl,this.isDone,this.creationDate,this.editable);
  }

  addTask() {
    if (!this.title.match(/^ *$/)) {
      this.tasks.push(new Task(this.title));
    }
    this.title = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
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
  editable: boolean = false;
  creationDate: Date;
  constructor(title?: string) {
    title ? this.title = title : '';
    this.creationDate = new Date();

  }
  clickcCheck() {
    this.isDone = !this.isDone;
  }
  edit() {
    this.editable = !this.editable;
  }
}
