import { Component, OnInit } from '@angular/core';
import { Client, NailService } from 'src/app/shared/models';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  clients: Client[] = [
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
  ];

  services: NailService[] = [
    { id: '1', name: 'Manicure', price: 20.00 },
    { id: '2', name: 'Pedicure', price: 27.00 },
    { id: '3', name: 'Acrylics', price: 35.00 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
