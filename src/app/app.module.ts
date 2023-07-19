import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SearchComponent } from './search/search.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { PopUpComponent } from './pop-up/pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FilterPipe,
    TodoComponent,
    AddTodoComponent,
    SearchComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // for reactive forms
    MatDialogModule, 
    MatPaginatorModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
