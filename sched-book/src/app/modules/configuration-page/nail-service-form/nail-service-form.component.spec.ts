import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NailServiceFormComponent } from './nail-service-form.component';

describe('NailServiceFormComponent', () => {
  let component: NailServiceFormComponent;
  let fixture: ComponentFixture<NailServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NailServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NailServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
