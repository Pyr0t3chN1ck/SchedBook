import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NailService } from 'src/app/shared/models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NailServicesConfigurationComponent } from '../nail-services-configuration/nail-services-configuration.component';

@Component({
  selector: 'app-nail-service-form',
  templateUrl: './nail-service-form.component.html',
  styleUrls: ['./nail-service-form.component.css']
})
export class NailServiceFormComponent implements OnInit, OnChanges {
  nailServiceForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });
  @Input() currentNailService: NailService;
  @Input() isAddServiceForm = false;
  @Output() saveNailService = new EventEmitter<NailService>();
  @Output() deleteNailService = new EventEmitter<NailService>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.currentNailService) {
      this.nailServiceForm.controls.name.patchValue(this.currentNailService.name);
      this.nailServiceForm.controls.price.patchValue(this.currentNailService.price);
    }
  }

  onSave(): void {
    if (this.nailServiceForm.valid) {
      const serviceFormObject = this.nailServiceForm.value as NailService;
      this.nailServiceForm.reset();
      this.saveNailService.emit(serviceFormObject);
    }
  }

  onDelete(): void {
    this.nailServiceForm.reset();
    this.deleteNailService.emit(this.currentNailService);
  }
}
