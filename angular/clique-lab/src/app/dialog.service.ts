import { Injectable, Inject, Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) { }
  dialogRef : any;

  openDialog() {
    console.log("hello");
    this.dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '150px'
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { }