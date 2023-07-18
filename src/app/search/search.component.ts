import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/classes/Todo';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchBy:string = '';
  @Input('list') list!:any[];

  searchFn(){
    return this.list.filter((t=>t.title.match(this.searchBy)));
  }
}
