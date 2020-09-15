import { Component, OnInit, ViewChild } from '@angular/core';
import { NailService } from '../../../shared/models';
import { MatSelectionList } from '@angular/material/list';

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
  @ViewChild('nailServicesListEl') nailServiceListEl: MatSelectionList;
  selectedNailService: NailService = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectNailService() {
    this.selectedNailService = this.nailServices[this.nailServiceListEl.selectedOptions.selected[0].value];
  }

  deleteNailService(deletedNailService: NailService): void {
    this.nailServices = this.nailServices.filter(ns => ns.id !== deletedNailService.id);
    this.selectedNailService = null;
    this.nailServiceListEl.selectedOptions.clear();
    console.log('Deleted Nail Service!');
  }

  saveNailServiceEdit(editedNailService: NailService): void {
      this.nailServices[this.nailServices.findIndex(ns => ns.id === this.selectedNailService.id)] = editedNailService;
      this.selectedNailService = null;
      this.nailServiceListEl.selectedOptions.clear();
      console.log('Edited Nail Service!');
  }

  openAddServiceForm() {
    this.selectedNailService = null;
    this.nailServiceListEl.selectedOptions.clear();
  }

}
