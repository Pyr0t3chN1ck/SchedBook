import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Client } from 'src/app/shared/models';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})

export class ContactSearchComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>([
    { id: '1', firstName: 'John', lastName: 'Smith', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '2', firstName: 'Jane', lastName: 'Doe', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '3', firstName: 'Orlando', lastName: 'Bloom', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '4', firstName: 'Chris', lastName: 'Evans', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '5', firstName: 'Clark', lastName: 'Kent', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '6', firstName: 'Peter', lastName: 'Parker', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
    { id: '7', firstName: 'Bruce', lastName: 'Wayne', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dateOfBirth: new Date(), brandPreference: '', colorPreference: '', notes: '' },
  ]);
  @ViewChild(MatPaginator, { static: true }) searchResultTablePaginator: MatPaginator;
  tableColumns = ['name', 'address', 'phoneNumber', 'email', 'dob'];
  searchText: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.searchResultTablePaginator;
  }

  search() {
    this.dataSource.filter = this.searchText.toLocaleLowerCase();
  }

  openAddDialog() {
    const addClientDialogRef = this.dialog.open(ContactFormComponent);
    addClientDialogRef.componentInstance.save.subscribe(data => {
      this.addClient(data);
    });
  }

  addClient(newClient: Client) {
    console.log(newClient);
    const data = this.dataSource.data;
    data.push(newClient);
    this.dataSource.data = data;
  }

}