import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.css']
})

export class ContactSearchComponent implements OnInit {
  dataSource = new MatTableDataSource([
    { name: 'John Smith', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Jane Doe', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Orlando Bloom', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Chris Evans', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Clark Kent', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Peter Parker', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
    { name: 'Bruce Wayne', address: '123 City Ave, Cleveland, OH 44221', phoneNumber: '1234567890',
    email: 'testmail@email.com', dob: new Date() },
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
  }

}
