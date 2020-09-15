import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NailService } from 'src/app/shared/models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nail-service-form',
  templateUrl: './nail-service-form.component.html',
  styleUrls: ['./nail-service-form.component.css']
})
export class NailServiceFormComponent implements OnInit, OnChanges {
  nailServiceForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('')
  });
  @Input() currentNailService: NailService;
  @Output() saveNailService = new EventEmitter<NailService>();
  @Output() deleteNailService = new EventEmitter<NailService>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.nailServiceForm.controls.name.patchValue(this.currentNailService.name);
    this.nailServiceForm.controls.price.patchValue(this.currentNailService.price);
  }

  onSave(): void {
    if (this.nailServiceForm.valid) {
      const editedNailService = this.nailServiceForm.value as NailService;
      editedNailService.id = this.currentNailService.id;
      console.log(editedNailService);
      this.saveNailService.emit(editedNailService);
    }
  }

  onDelete(): void {
    this.nailServiceForm.reset();
    this.deleteNailService.emit(this.currentNailService);
  }
}
