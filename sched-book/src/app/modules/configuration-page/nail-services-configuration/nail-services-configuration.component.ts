import { Component, OnInit } from '@angular/core';
import { NailService } from "../../../shared/models";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-nail-services-configuration',
  templateUrl: './nail-services-configuration.component.html',
  styleUrls: ['./nail-services-configuration.component.css']
})
export class NailServicesConfigurationComponent implements OnInit {
  nailServices: NailService[] = [
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
    {name: 'Manicure', price: 20.00},
    {name: 'Pedicure', price: 27.00},
    {name: 'Acrylics', price: 35.00},
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

  onSave(): void {
    if (this.nailServiceForm.valid) {
      console.log(this.nailServiceForm.value);
    }
  }

}
