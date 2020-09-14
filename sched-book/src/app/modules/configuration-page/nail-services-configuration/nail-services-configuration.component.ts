import { Component, OnInit } from '@angular/core';
import { NailService } from '../../../shared/models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-nail-services-configuration',
  templateUrl: './nail-services-configuration.component.html',
  styleUrls: ['./nail-services-configuration.component.css']
})
export class NailServicesConfigurationComponent implements OnInit {
  nailServices: NailService[] = [
    { id: '1', name: 'Manicure', price: 20.00 },
    { id: '2', name: 'Pedicure', price: 27.00 },
    { id: '3', name: 'Acrylics', price: 35.00 },
    { id: '4', name: 'Manicure', price: 20.00 },
    { id: '5', name: 'Pedicure', price: 27.00 },
    { id: '6', name: 'Acrylics', price: 35.00 },
    { id: '7', name: 'Manicure', price: 20.00 },
    { id: '8', name: 'Pedicure', price: 27.00 },
    { id: '9', name: 'Acrylics', price: 35.00 },
    { id: '10', name: 'Manicure', price: 20.00 },
    { id: '11', name: 'Pedicure', price: 27.00 },
    { id: '12', name: 'Acrylics', price: 35.00 },
    { id: '13', name: 'Manicure', price: 20.00 },
    { id: '14', name: 'Pedicure', price: 27.00 },
    { id: '15', name: 'Acrylics', price: 35.00 },
    { id: '16', name: 'Manicure', price: 20.00 },
    { id: '17', name: 'Pedicure', price: 27.00 },
    { id: '18', name: 'Acrylics', price: 35.00 },
    { id: '19', name: 'Manicure', price: 20.00 },
    { id: '20', name: 'Pedicure', price: 27.00 },
    { id: '21', name: 'Acrylics', price: 35.00 },
  ];
  nailServiceForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('')
  });
  selectedNailServiceId = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSelect(selectedOptions: MatListOption[]) {
    this.selectedNailServiceId = this.nailServices[selectedOptions[0].value].id;
    this.nailServiceForm.patchValue({
      name: this.nailServices.find(ns => ns.id === this.selectedNailServiceId).name,
      price: this.nailServices.find(ns => ns.id === this.selectedNailServiceId).price
    });
  }

  onDelete(): void {
    this.nailServices = this.nailServices.filter(ns => ns.id !== this.selectedNailServiceId);
    console.log('Deleted Nail Service!');
  }

  onSave(): void {
    if (this.nailServiceForm.valid) {
      const editedNailService = this.nailServiceForm.value as NailService;
      editedNailService.id = this.selectedNailServiceId;
      this.nailServices[this.nailServices.findIndex(ns => ns.id === this.selectedNailServiceId)] = editedNailService;
      console.log('Edited Nail Service!');
    }
  }

}
