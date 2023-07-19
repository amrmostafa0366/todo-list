import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  list:any[];
  item:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef: MatDialogRef<PopUpComponent>){
    this.list = data.list;
    this.item = data.item;
  }

  delete(){
    let index = this.list.indexOf(this.item);
    this.list.splice(index,1);
    this.dialogRef.close(); 
  }
  cancel(){
    this.dialogRef.close(); 
  }

}
