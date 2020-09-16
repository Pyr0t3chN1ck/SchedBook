import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from '../client-form/client-form.component';
import { Client } from 'src/app/shared/models';
import { DeleteClientDialogComponent } from '../delete-client-dialog/delete-client-dialog.component';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})

export class ClientSearchComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>([
    {
      id: '1', firstName: 'John', lastName: 'Smith', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '2', firstName: 'Jane', lastName: 'Doe', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '3', firstName: 'Orlando', lastName: 'Bloom', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '4', firstName: 'Chris', lastName: 'Evans', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '5', firstName: 'Clark', lastName: 'Kent', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '6', firstName: 'Peter', lastName: 'Parker', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
    {
      id: '7', firstName: 'Bruce', lastName: 'Wayne', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
      email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: ''
    },
  ]);
  @ViewChild(MatPaginator, { static: true }) searchResultTablePaginator: MatPaginator;
  tableColumns = ['name', 'address', 'phoneNumber', 'email', 'dob', 'actions'];
  searchText: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.searchResultTablePaginator;
  }

  search(): void {
    this.dataSource.filter = (this.searchText) ?
      this.searchText.toLocaleLowerCase() : '';
  }

  openAddDialog(): void {
    const addClientDialogRef = this.dialog.open(ClientFormComponent);
    addClientDialogRef.componentInstance.save.subscribe(data => {
      this.addClient(data);
    });
  }

  addClient(newClient: Client): void {
    const data = this.dataSource.data;
    data.push(newClient);
    this.dataSource.data = data;
    console.log('Added New Client!');
  }

  openDeleteDialog(row: Client): void {
    const deleteClientDialogRef = this.dialog.open(DeleteClientDialogComponent, {
      data: row
    });
    deleteClientDialogRef.componentInstance.delete.subscribe(data => {
      this.deleteClient(data);
    });
  }

  deleteClient(deletedClient: Client): void {
    this.dataSource.data = this.dataSource.data.filter(row => row.id !== deletedClient.id);
    console.log('Deleted Client!');
  }

}
