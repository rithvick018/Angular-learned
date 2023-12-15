import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private openDialog: MatDialog) { }
  openConfirmationDialog(header:string,content:string){
      return this.openDialog.open(ConfirmationComponent,{
        data:{
          header: header,
          content: content
        }
      })
  }
}
