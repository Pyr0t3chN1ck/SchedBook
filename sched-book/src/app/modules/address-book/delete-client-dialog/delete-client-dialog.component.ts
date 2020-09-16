import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models';

@Component({
  selector: 'app-delete-client-dialog',
  templateUrl: './delete-client-dialog.component.html',
  styleUrls: ['./delete-client-dialog.component.css']
})
export class DeleteClientDialogComponent implements OnInit {
  delete = new EventEmitter<Client>();

  constructor(private dialogRef: MatDialogRef<DeleteClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Client) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.delete.emit(this.data);
    this.dialogRef.close();
  }

}
