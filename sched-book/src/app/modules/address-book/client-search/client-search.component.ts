import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormComponent } from '../client-form/client-form.component';
import { Client, ClientCreatePayload } from 'src/app/shared/models';
import { DeleteClientDialogComponent } from '../delete-client-dialog/delete-client-dialog.component';
import { Store } from '@ngrx/store';
import { AppState, selectAllCurrentClients } from 'src/app/state/reducers';
import { Subscription } from 'rxjs';
import { createClient, markClientDeleted, updateClient } from 'src/app/state/actions/clients.actions';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})

export class ClientSearchComponent implements OnInit {
  subscriptions = new Subscription();
  dataSource = new MatTableDataSource<Client>();
  @ViewChild(MatTable) searchResultTable: MatTable<Client>;
  @ViewChild(MatPaginator, { static: true }) searchResultTablePaginator: MatPaginator;
  tableColumns = ['name', 'address', 'phoneNumber', 'email', 'actions'];
  selectedClient: Client | null;
  searchText: string;

  constructor(private dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectAllCurrentClients).subscribe(clients => {
      this.dataSource = new MatTableDataSource<Client>(clients as Client[]);
      this.dataSource.paginator = this.searchResultTablePaginator;
    });
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
    this.store.dispatch(createClient({
      address: newClient.address,
      brandPreference: newClient.brandPreference,
      colorPreference: newClient.colorPreference,
      dateOfBirth: newClient.dateOfBirth,
      email: newClient.email,
      firstName: newClient.firstName,
      lastName: newClient.lastName,
      notes: newClient.notes,
      phoneNumber: newClient.phoneNumber
    } as ClientCreatePayload));
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
    this.store.dispatch(markClientDeleted({ id: deletedClient.id }));
  }

  openEditDialog(row: Client): void {
    const editClientDialogRef = this.dialog.open(ClientFormComponent, {
      data: row
    });
    editClientDialogRef.componentInstance.save.subscribe(data => {
      this.editClient(data);
    });
  }

  editClient(editedClient: Client): void {
    const editedClientOldValues = this.dataSource.data.find(client => client.id === editedClient.id);
    this.store.dispatch(updateClient({
      payload: {
        id: editedClient.id,
        firstName: editedClient.firstName,
        lastName: editedClient.lastName,
        address: editedClient.address,
        phoneNumber: editedClient.phoneNumber,
        email: editedClient.email,
        dateOfBirth: editedClient.dateOfBirth,
        brandPreference: editedClient.brandPreference,
        colorPreference: editedClient.colorPreference,
        notes: editedClient.notes,
        oldValues: {
          firstName: editedClientOldValues.firstName,
          lastName: editedClientOldValues.lastName,
          address: editedClientOldValues.address,
          phoneNumber: editedClientOldValues.phoneNumber,
          email: editedClientOldValues.email,
          dateOfBirth: editedClientOldValues.dateOfBirth,
          brandPreference: editedClientOldValues.brandPreference,
          colorPreference: editedClientOldValues.colorPreference,
          notes: editedClientOldValues.notes,
        }
      }
    }));
  }
}
