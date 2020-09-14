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
    serviceName: new FormControl('', [Validators.required]),
    servicePrice: new FormControl('')
  });
  selectedNailService: NailService;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSelect(selectedOptions: MatListOption[]) {
    this.selectedNailService = this.nailServices[selectedOptions[0].value];
    this.nailServiceForm.patchValue({
      serviceName: this.selectedNailService.name,
      servicePrice: this.selectedNailService.price
    });
  }

  onDelete(): void {
    this.nailServices = this.nailServices.filter(ns => ns.id !== this.selectedNailService.id);
    console.log('Deleted Nail Service!');
  }

  onSave(): void {
    if (this.nailServiceForm.valid) {
      console.log(this.nailServiceForm.value);
    }
  }

}
